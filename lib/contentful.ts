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

export async function getPosts(limit: number, skip: number = 0, from: "getServerSideProps" | "getStaticPaths" | "getStaticProps" = "getServerSideProps") {
    const client = await contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
    });

    const res = await client.getEntries({
        order: '-sys.createdAt',
        limit: limit,
        skip: skip
    });

    // console.log(res.items[0].sys.space?.sys)
    let entriesTrimmed: Entry[] | any[] = from === "getStaticPaths" ? 
    res.items.map(item => (
        {
            slug: item.sys.id
        }
    )) :
    res.items.map(item => (
        {
            metadata: item.metadata,
            id: item.sys.id,
            createdAt: item.sys.createdAt,
            updatedAt: item.sys.updatedAt,
            type: item.sys.contentType.sys.id,
            title: (item.fields as any).title,
            slug: (item.fields as any).slug,
            thumbnail: (item.fields as any).thumbnail.fields.file.url,
            headerImage: (item.fields as any).headerImage,
            items: (item.fields as any).items
        }
    ))

    return entriesTrimmed
}

export async function getPost(id: string) {
    const client = await contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string
    });
    console.log(id)

    const res = await client.getEntry(id);

    // console.log(res)

    const formattedEntry = {
        metadata: res.metadata,
        id: res.sys.id,
        createdAt: res.sys.createdAt,
        updatedAt: res.sys.updatedAt,
        type: res.sys.contentType.sys.id,
        title: (res.fields as any).title,
        slug: (res.fields as any).slug,
        thumbnail: (res.fields as any).thumbnail.fields.file.url,
        headerImage: (res.fields as any).headerImage,
        items: (res.fields as any).items
    }

    return formattedEntry
}