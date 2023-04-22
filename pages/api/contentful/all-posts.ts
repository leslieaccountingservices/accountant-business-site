import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from "contentful";
import { EntrySummary } from '@/lib/contentful';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EntrySummary[]>
) {
  const { limit, skip } = req.query;
  
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });
  
  const entries = await client.getEntries({
    content_type: 'main',
    order: '-sys.createdAt',
    limit: limit,
    skip: skip,
  })

  let formatted: EntrySummary[] = entries.items.map(item => (
    {
      metadata: item.metadata,
      id: item.sys.id,
      createdAt: item.sys.createdAt,
      title: (item.fields as any).title,
      thumbnail: `http:${(item.fields as any).thumbnail.fields.file.url}`
    }
  ));

  return res.json(formatted)
}