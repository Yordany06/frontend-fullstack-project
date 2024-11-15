import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const exchangeRates = await prisma.exchangeRate.findMany();
      res.status(200).json(exchangeRates);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching exchange rates' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
