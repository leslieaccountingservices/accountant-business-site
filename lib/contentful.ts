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

export interface ServicePricing {
    serviceName: string;
    serviceDesc: string | null;
    price: number;
    priceDetails: string | null;
    subPricing:  any | null
}

export interface IPackages {
    title: string;
    cost: number;
    period: string,
    desc: string | null,
    includes: Array<string | null>
}

export async function getPaths() {
    const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID as string,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });

    const entries = await client.getEntries({ content_type: 'main' })

    let paths = entries.items.map(item => {
        return {
            params: { post: item.sys.id }
        }
    })

    return paths
}

export async function getPost(id: string) {

    const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
    });

    const post = await client.getEntry(id);

    const formattedPost: Entry = {
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
    return formattedPost
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

    let formattedEntries: EntrySummary[] = entries.items.map(item => (
        {
            metadata: item.metadata,
            id: item.sys.id,
            createdAt: item.sys.createdAt,
            title: (item.fields as any).title,
            thumbnail: `http:${(item.fields as any).thumbnail.fields.file.url}`
        }
    ))

    return formattedEntries
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

export async function getServicesPrices() {
    const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID as string,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    })

    const servicePrices = await client.getEntries({
        content_type: 'servicePricing'
    })

    const formatted = servicePrices.items.map(item => (
        {
            serviceName: (item.fields as any).serviceName as string,
            serviceDesc: (item.fields as any).serviceDescription as string || null,
            price: (item.fields as any).price as number,
            priceDetails: (item.fields as any).pricingDetails as string || null,
            subPricing: (item.fields as any).subPricing as any || null
        }
    ))

    return formatted;
}

export async function getPackages() {
    const client = await contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID as string,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });

    const packages = await client.getEntries({
        content_type: 'packages'
    })

    console.log(JSON.stringify(packages, null, 2));


    const formatted: Array<IPackages> = packages.items.map(item => (
        {
            title: (item.fields as any).packageTitle as string,
            cost: (item.fields as any).cost as number,
            period: (item.fields as any).payPeriod as string,
            desc: (item.fields as any).description as string,
            includes: (item.fields as any).includes as Array<string | null>
        }
    ))

    return formatted;
}

export async function morePosts(limit: number, skip: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    const posts: EntrySummary[] = await res.json();
    return posts
}