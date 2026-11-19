export function createJsonPostHandler(handle, {
  allowedOrigin = process.env.API_ALLOWED_ORIGIN || process.env.NEWSLETTER_ALLOWED_ORIGIN,
  maxBytes = 4096,
} = {}) {
  return async function jsonPost(req, res) {
    const origin = req.headers.origin;
    res.setHeader('Vary', 'Origin');
    res.setHeader('Cache-Control', 'no-store');

    function respond(status, result) {
      res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(result));
    }

    if (origin && origin !== allowedOrigin) {
      const requestOrigin = `${req.socket.encrypted ? 'https' : 'http'}://${req.headers.host}`;
      if (origin !== requestOrigin) return respond(403, { error: 'origin' });
    }

    if (origin && origin === allowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }

    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }).end();
      return;
    }

    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST, OPTIONS');
      return respond(405, { error: 'method' });
    }

    if (req.headers['content-type']?.split(';')[0].trim().toLowerCase() !== 'application/json') {
      return respond(415, { error: 'content_type' });
    }

    let data;
    try {
      const chunks = [];
      let size = 0;
      for await (const chunk of req.iterator({ destroyOnReturn: false })) {
        size += chunk.length;
        if (size > maxBytes) {
          req.resume();
          return respond(413, { error: 'size' });
        }
        chunks.push(chunk);
      }
      data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch {
      return respond(400, { error: 'invalid_request' });
    }

    return handle(data, respond);
  };
}
