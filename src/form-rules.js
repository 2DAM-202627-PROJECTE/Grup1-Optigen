export const NEWSLETTER_CONSENT_VERSION = '2026-11-19';

export function isValidEmail(email) {
  if (typeof email !== 'string' || email.length > 254) return false;

  const [local] = email.split('@');
  return local.length <= 64
    && !local.startsWith('.')
    && !local.endsWith('.')
    && !local.includes('..')
    && /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(email);
}

export const CONTACT_MAX_LENGTHS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 4000,
};
