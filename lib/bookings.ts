import { useState, useEffect } from 'react';
import { Entry } from "./contentful";

export default async function getData(limit: number, skip: number) {
    // let posts: Entry[] = [];
    const res = await fetch(`http://localhost:3000/api/contentful/all-posts?limit=${limit}&skip=${skip}`);
    const posts = await res.json();
    // console.log(posts)

    return posts
}