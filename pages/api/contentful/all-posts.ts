// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from "contentful";


export interface Entry {
    metadata: contentful.Metadata;
    id: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    title: string;
    headerImage: any;
    body: any;
}
export interface EntrySummary {
    metadata: contentful.Metadata;
    id: string;
    createdAt: string;
    title: string;
    thumbnail: any;
}

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
    order: '-sys.createdAt',
      limit: limit,
      skip: skip
    })

    // console.log(entries)

    let entriesTrimmed: EntrySummary[] = entries.items.map(item => (
      {
          metadata: item.metadata,
          id: item.sys.id,
          createdAt: item.sys.createdAt,
          title: (item.fields as any).title,
          thumbnail: `http:${(item.fields as any).thumbnail.fields.file.url}`
      }
    ))

  // console.log(entriesTrimmed)

  return res.json(entriesTrimmed)
}