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
    slug: string;
    thumbnail: any;
    headerImage: any;
    items: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Entry[]>
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

    let entriesTrimmed: Entry[] = entries.items.map(item => (
      {
          metadata: item.metadata,
          id: item.sys.id,
          createdAt: item.sys.createdAt,
          updatedAt: item.sys.updatedAt,
          type: item.sys.contentType.sys.id,
          title: (item.fields as any).title,
          slug: (item.fields as any).slug,
          thumbnail: `http:${(item.fields as any).thumbnail.fields.file.url}`,
          headerImage: (item.fields as any).headerImage,
          items: (item.fields as any).items
      }
    ))

  // console.log(entriesTrimmed)

  return res.json(entriesTrimmed)
}