import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from 'contentful';
import { Entry } from '@/lib/contentful';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const { id } = req.query;

    var client;
    try {
        client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });
    } catch (err) {
        console.log(err)
    }

    var post;
    try {
        post = await client?.getEntry(id as string);
    } catch (err) { console.log(err) }

    const formatted = {
        metadata: post?.metadata,
        id: post?.sys.id,
        createdAt: post?.sys.createdAt,
        updatedAt: post?.sys.updatedAt,
        type: post?.sys.contentType.sys.id,
        title: (post?.fields as any).title,
        description: (post?.fields as any).description,
        keywords: (post?.fields as any).keywords,
        headerImage: `http:${(post?.fields as any).headerImage.fields.file.url}`,
        body: (post?.fields as any).body
    }


    return res.json(formatted)
}