import { createHash } from 'node:crypto';
import { CONTACT_MAX_LENGTHS, isValidEmail } from '../src/form-rules.js';
import { createJsonPostHandler } from './json-post.js';

export function createContactHandler({
  apiKey = process.env.CONTACT_RESEND_API_KEY?.trim(),
  from = process.env.CONTACT_FROM?.trim(),
  recipients = process.env.CONTACT_TO,
} = {}) {
  const to = recipients?.split(',').map((recipient) => recipient.trim()).filter(Boolean) || [];
  let windowEndsAt = 0;
  let submissions = 0;

  return createJsonPostHandler(async (data, respond) => {
    const fields = {};
    for (const [name, maxLength] of Object.entries(CONTACT_MAX_LENGTHS)) {
      const value = typeof data?.[name] === 'string' ? data[name].trim() : '';
      if (!value || value.length > maxLength) return respond(400, { error: 'fields' });
      fields[name] = value;
    }

    const { name, email, subject, message } = fields;
    if (!isValidEmail(email) || /[\r\n]/.test(name + subject)) {
      return respond(400, { error: 'fields' });
    }

    if (!apiKey || !from || !to.length || !to.every(isValidEmail)) {
      return respond(503, { error: 'unavailable' });
    }

    const now = Date.now();
    if (now >= windowEndsAt) {
      windowEndsAt = now + 60_000;
      submissions = 0;
    }
    if (submissions >= 12) return respond(429, { error: 'rate_limit' });
    submissions += 1;

    const body = JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `[OptiGen] ${subject}`,
      text: `Nom: ${name}\nCorreu electrònic: ${email}\n\n${message}`,
    });
    const idempotencyKey = createHash('sha256').update(body).digest('hex');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body,
        signal: AbortSignal.timeout(8_000),
      });

      if (!response.ok) {
        console.error(`Resend ha rebutjat un missatge de contacte (HTTP ${response.status}).`);
        return respond(502, { error: 'delivery' });
      }

      const result = await response.json();
      if (typeof result?.id !== 'string' || !result.id) return respond(502, { error: 'delivery' });
      return respond(200, { sent: true });
    } catch {
      console.error('No s’ha pogut contactar amb el servei de correu.');
      return respond(502, { error: 'delivery' });
    }
  }, { maxBytes: 32 * 1024 });
}
