import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers enable karna taake frontend se request chal sake
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { planName, amount } = req.body;

    // Vercel Environment variable se secret key lena (Bilkul secure!)
    const secretKey = process.env.SAFEPAY_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({ error: 'Secret key not configured on server' });
    }

    // Safepay API ko request bhej kar naya session generate karna
    const safepayResponse = await fetch('https://api.getsafepay.com/order/v1/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secretKey}`
      },
      body: JSON.stringify({
        amount: amount,
        currency: 'PKR',
        environment: 'production'
      })
    });

    const data = await safepayResponse.json();

    return res.status(200).json(data);

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
