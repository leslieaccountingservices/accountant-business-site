import * as contentful from "contentful"

export interface Entry {
    metadata: contentful.Metadata;
    id: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    title: string;
    description: string;
    keywords: string;
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

export interface FAQ {
    question: string;
    answer: string;
}

export async function getPaths() {
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

    return paths
}

export async function getPost(id: string) {
    const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });

    const post = await client.getEntry(id as string);

    const formatted: Entry = {
        metadata: post.metadata,
        id: post.sys.id,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt,
        type: post.sys.contentType.sys.id,
        title: (post.fields as any).title,
        description: (post.fields as any).description,
        keywords: (post.fields as any).keywords,
        headerImage: `http:${(post.fields as any).headerImage.fields.file.url}`,
        body: (post.fields as any).body
    }

    return formatted
}

export async function getPosts(limit: number, skip: number) {
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
    ))

    return formatted
}

export async function getFaqs() {
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

    return formatted
}

export async function morePosts(limit: number, skip: number) {
    var res;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    } catch (err) {
        throw new Error(`err: ${err}`);
    }

    const posts: EntrySummary[] = await res.json();
    return posts
}