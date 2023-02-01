// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongoDb from '../../database/connect';
export default async function handler(req, res) {
  connectMongoDb()
  res.status(200).json({ name: 'Md Ansarul Haque' })
}
