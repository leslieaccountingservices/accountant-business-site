import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from "contentful";
import { EntrySummary } from '@/lib/contentful';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EntrySummary[] | undefined>
) {
  const { limit, skip } = req.query;
  var client;
  try {
    client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  });
  } catch(err) { console.log(err) }
  // const client = await contentful.createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID as string,
  //   environment: 'master', // defaults to 'master' if not set
  //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
  // });
  
  var entries;
  try {
    entries = await client?.getEntries({
    content_type: 'main',
    order: '-sys.createdAt',
    limit: limit,
    skip: skip,
  })
  } catch (err) {
    console.log(err)
  }

    // console.log(entries)

    let formatted: EntrySummary[] | undefined = entries?.items.map(item => (
      {
        metadata: item.metadata,
        id: item.sys.id,
        createdAt: item.sys.createdAt,
        title: (item.fields as any).title,
        thumbnail: `http:${(item.fields as any).thumbnail.fields.file.url}`
      }
    ))

  // console.log(entriesTrimmed)

  return res.json(formatted)
}