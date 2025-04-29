export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, specialization } = req.body;
      // You can store to DB or just return for now
      return res.status(200).json({ message: 'Doctor added', data: { name, specialization } });
    }
  
    res.status(405).json({ error: 'Method not allowed' });
  }
  