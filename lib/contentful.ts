import * as contentful from "contentful"

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

export async function getPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/paths`);
    const paths = await res.json();

    return paths
}

export async function getPost(id: string) {
    var res;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/one-post?id=${id}`);

    } catch (err) {
        console.log(err)
    }
    const post = await res?.json();

    return post
}

export async function getPosts(limit: number, skip: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    const posts = await res.json();

    return posts
}