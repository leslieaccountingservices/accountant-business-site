import { NextApiRequest, NextApiResponse } from "next";
import * as contentful from 'contentful';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });
  
  const entries = await client.getEntries()

    let paths = entries.items.map(item => {
      return {
        params: { post: item.sys.id }
      }
    })
    console.log(paths)
  res.send(paths)
}