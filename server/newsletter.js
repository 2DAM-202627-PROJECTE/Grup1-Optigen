import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createJsonPostHandler } from './json-post.js';
import { isValidEmail, NEWSLETTER_CONSENT_VERSION } from '../src/form-rules.js';

export function createNewsletterHandler({
  dbPath = process.env.NEWSLETTER_DB_PATH || '.optigen-data/newsletter.sqlite',
  allowedOrigin,
} = {}) {
  let insertSubscription;

  function storeSubscription(email) {
    if (!insertSubscription) {
      const filename = resolve(dbPath);
      mkdirSync(dirname(filename), { recursive: true, mode: 0o700 });
      const db = new DatabaseSync(filename);
      try {
        db.exec(`
          PRAGMA busy_timeout = 5000;
          CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
            email TEXT PRIMARY KEY COLLATE NOCASE,
            subscribed_at TEXT NOT NULL,
            consent_version TEXT NOT NULL
          ) STRICT;
        `);
        insertSubscription = db.prepare(`
          INSERT INTO newsletter_subscriptions (email, subscribed_at, consent_version)
          VALUES (?, ?, ?) ON CONFLICT(email) DO NOTHING
        `);
      } catch (error) {
        db.close();
        throw error;
      }
    }

    insertSubscription.run(email, new Date().toISOString(), NEWSLETTER_CONSENT_VERSION);
  }

  return createJsonPostHandler((data, respond) => {
    const email = typeof data?.email === 'string' ? data.email.trim() : '';
    if (!isValidEmail(email)) return respond(400, { error: 'email' });
    if (data.consent !== true || data.consentVersion !== NEWSLETTER_CONSENT_VERSION) {
      return respond(400, { error: 'consent' });
    }

    try {
      storeSubscription(email);
      return respond(200, { subscribed: true });
    } catch {
      console.error('No s’ha pogut desar una subscripció a la newsletter.');
      return respond(503, { error: 'storage' });
    }
  }, { allowedOrigin });
}
