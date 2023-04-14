import type { NextApiRequest, NextApiResponse } from 'next';
import * as contentful from 'contentful';

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

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>) {

    const { id } = req.query;

    const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });

    const post = await client.getEntry(id as string);

    const formattedPost = {
        metadata: post.metadata,
        id: post.sys.id,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt,
        type: post.sys.contentType.sys.id,
        title: (post.fields as any).title,
        thumbnail: (post.fields as any).thumbnail.fields.file.url,
        headerImage: (post.fields as any).headerImage,
        body: (post.fields as any).body
    }


    return res.json(formattedPost)
}