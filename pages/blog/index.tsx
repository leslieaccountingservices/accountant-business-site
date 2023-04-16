import MetaTags from "@/components/MetaTags";
import Loader from "@/components/shared-ui/Loader";
import Header from "@/components/shared-ui/Header";
import BlogLink from "@/components/BlogLink";
import Footer from "@/components/shared-ui/Footer";
import { GetServerSideProps } from "next";
import { Entry, EntrySummary, getPosts } from "@/lib/contentful"
import { useEffect, useState } from "react";
import CallToAction from "@/components/shared-ui/CallToAction";

export const getServerSideProps: GetServerSideProps = async () => {
    const entries = await getPosts(10, 0);

    return {
        props: {
            entries: entries
        }
    }
}

export default function Blog({ entries }: { entries: Entry[] }) {
    return (
        <>
            <MetaTags title="Blog" description="Leslie's Accounting Services Blog" pageUrl={`${process.env.NEXT_PUBLIC_HOME_URL}/blog`} imgUrl="/static/images/charity.jpeg" />
            <Header />
            <Banner />
            <Main entries={entries} />
        </>
    )
}

function Banner() {
    return (
    <div className='w-full h-screen bg-bone'>
        <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center'>
            <section className=' h-4/6 w-4/6 flex items-center'>
                <div className='h-3/6 w-4/6 flex flex-row'>
                    <div className='h-full w-fit md:w-1/3 border-l md:border-l-0 md:border-r border-black flex flex-col justify-center items-center'>
                        <h4 className="text-8xl  hidden md:block">Blog</h4>
                    </div>
                    <div className='h-fit md:h-full w-2/3 flex flex-col justify-center'>
                        <h1 className='md:text-4xl text-8xl font-light ml-4 my-4 text-white'>Blog</h1>
                        <p className='ml-4 md:my-4 w-72 md:w-1/2'>Our collection of accounting and investment related knowledge</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

function Main({ entries }: { entries: Entry[] }) {

    return (
        <div className='z-10 absolute w-full h-fit inset-y-96 md:inset-y-1/2 flex flex-col justify-center items-center'>
            {entries.length > 0 ? 
            <Posts entries={entries} /> :
            <div className='w-full md:w-4/6 h-96 bg-bone border shadow-md rounded-md flex justify-center items-center'>
                Posts coming soon!
            </div>
            }
            <Footer />
        </div>
    )
}

function Posts({ entries }: { entries: EntrySummary[] }) {
    const [posts, setPosts] = useState(entries);
    const [skip, setSkip] = useState(10);
    const [loading, setLoading] = useState(false);
    const [end, setEnd] = useState(false)

    const getMorePosts = async () => {
        setLoading(true);

        if (end) {
            setLoading(false);
            return
        };

        const newPosts = await getPosts(10, skip);

        if (newPosts.length === 0) {
            setEnd(true);
        } else {
            setPosts(posts.concat(newPosts));
            setSkip(skip + 10);
        }
        
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
        <div className='w-full md:w-4/6 h-fit flex flex-col'>
            <div className="w-full h-fit flex flex-col items-center md:items-baseline  md:justify-start md:flex-row md:flex-wrap">
                {entries.map(entry => (
                    <BlogLink entry={entry} key={entry.id}/>
                ))}
                <Loader show={loading} />
            </div>
            <nav className="w-full h-20 flex justify-center items-center">
                <CallToAction disabled={end} actionText={ end ? "More posts coming soon!" : "Get more posts!" } action={getMorePosts} type="secondary" />
            </nav>
        </div>
    )
}