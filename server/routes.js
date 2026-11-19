import { createContactHandler } from './contact.js';
import { createNewsletterHandler } from './newsletter.js';

export function mountApi(base = '/') {
  const routes = new Map([
    [`${base}api/newsletter`, createNewsletterHandler()],
    [`${base}api/contact`, createContactHandler()],
  ]);

  return (req, res, next) => {
    const handler = routes.get(req.url.split('?')[0]);
    return handler ? handler(req, res) : next();
  };
}
