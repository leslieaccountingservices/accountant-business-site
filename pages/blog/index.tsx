import MetaTags from "@/components/MetaTags";
import Loader from "@/components/shared-ui/Loader";
import Header from "@/components/Header";
import BlogLink from "@/components/BlogLink";
import Footer from "@/components/Footer";
import { GetServerSideProps } from "next";
import { Entry, getPosts } from "@/lib/contentful"
import { useEffect, useState } from "react";

export async function getServerSideProps(context: any) {
    const entries = await getPosts(0);

    return {
        props: {
            entries: entries
        }
    }
}

export default function Blog({ entries }: { entries: Entry[] }) {
    return (
        <>
            <MetaTags title="Blog" description="Leslie's Accounting Services Blog" pageUrl="localhost:3000/blog" imgUrl="/static/images/charity.jpeg" />
            <Header page="blog" />
            <main className="w-full flex flex-col justify-center items-center h-fit pt-16 bg-cyan-100 z-0">
                <div className="w-4/6 min-h-screen flex flex-row bg-slate-200">
                    {/* <Categories /> */}
                    <Posts entries={entries} />
                </div>
            </main>
            <Footer />
        </>
    )
}

function Posts({ entries }: { entries: Entry[] }) {
    const [posts, setPosts] = useState(entries);
    const [skip, setSkip] = useState(10);
    const [loading, setLoading] = useState(false);
    const [end, setEnd] = useState(false)

    const getMorePosts = async () => {
        setLoading(true);

        const newPosts = await getPosts(skip);

        if (newPosts.length === 0) {
            setEnd(true);
        } else {
            setPosts(posts.concat(newPosts));
            setSkip(skip + 10);
        }

        // console.log(`New Posts: ${JSON.stringify(newPosts)}`);
        setLoading(false)
    }

    useEffect(() => {

        return () => {
            setPosts(entries);
            setSkip(10);
            setEnd(false);
        }
    }, [])

    return (
        <section className="h-fit w-full flex flex-col items-center relative bg-orange-300 z-0">
            <h3 className="text-3xl font-extralight ml-6">Blog</h3>
            <section className="w-full min-h-5/6 h-fit flex flex-wrap pl-6 pt-3 bg-green-500">
                {entries.map(entry => (
                    <BlogLink entry={entry} key={entry.id}/>
                ))}
            </section>
            <Loader show={loading} />
            <nav className="w-full h-20 absolute bottom-0 bg-green-400">
                <button disabled={end} onClick={getMorePosts}>{end ? "More posts coming soon!" : "Get more posts!"}</button>
            </nav>
        </section>
    )
}