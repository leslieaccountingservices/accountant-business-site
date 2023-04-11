import { useState, useEffect } from 'react';
import { Entry } from "./contentful";

export default async function getData(limit: number, skip: number) {
    // let posts: Entry[] = [];
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    const posts = await res.json();
    // console.log(posts)

    return posts
}