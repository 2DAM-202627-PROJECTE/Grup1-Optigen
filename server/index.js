import { createServer } from 'node:http';
import { mountApi } from './routes.js';

const api = mountApi();
const port = Number(process.env.PORT || 3000);

createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }).end('ok');
    return;
  }

  return api(req, res, () => res.writeHead(404).end());
}).listen(port, '0.0.0.0', () => {
  console.log(`API d'OptiGen disponible al port ${port}`);
});
