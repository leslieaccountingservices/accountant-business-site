import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from "contentful";
import { FAQ } from '@/lib/contentful';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<FAQ>>
) {
  const { limit, skip } = req.query;
  
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });
  
  const faqs = await client.getEntries({
    content_type: 'faq',
    order: '-sys.createdAt'
  })

  const formatted: Array<FAQ> = faqs.items.map(item => (
    {
        question: (item.fields as any).question as string,
        answer: (item.fields as any).answer as string
    }
  ))

  return res.json(formatted)
}