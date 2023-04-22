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
    var res;

    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/paths`);
    } catch (err) {
        console.log(err)
    }

    const paths = await res?.json();

    return paths
}

export async function getPost(id: string) {
    var res;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/one-post?id=${id}`);

    } catch (err) {
        console.log(err);
    }
    const post: Entry = await res?.json();

    return post
}

export async function getPosts(limit: number, skip: number) {
    var res;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    } catch(err) {
        console.log(err);
    }
    const posts: EntrySummary[] = await res?.json();

    return posts
}

export async function getFaqs() {
    var res;
    try {
        res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/faqs`);
    } catch (err) {
        console.log(err)
    }
    const faqs: FAQ[] = await res?.json();

    return faqs
}