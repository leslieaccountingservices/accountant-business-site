import MetaTags from "@/components/MetaTags";
import Loader from "@/components/shared-ui/Loader";
import Header from "@/components/shared-ui/Header";
import BlogLink from "@/components/BlogLink";
import Footer from "@/components/shared-ui/Footer";
import { GetServerSideProps } from "next";
import { EntrySummary, getPosts, morePosts } from "@/lib/contentful";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const entries = await getPosts(10, 0);

    return {
        props: {
            entries: entries
        }
    }
}

export default function Blog({ entries }: { entries: EntrySummary[] }) {
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
    <div data-testid="blog-banner" className='w-full h-screen bg-bone'>
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

function Main({ entries }: { entries: EntrySummary[] }) {

    return (
        <div data-testid="blog-main" className='z-10 absolute w-full h-fit inset-y-96 md:inset-y-1/2 flex flex-col justify-center items-center'>
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

function Posts({ entries = [] }: { entries: EntrySummary[] }) {
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

        const newPosts = await morePosts(10, skip);

        if (newPosts.length === 0) {
            setEnd(true);
        } else {
            setPosts(posts.concat(newPosts));
            setSkip(skip + 10);
        }
        
        setLoading(false)
    }

    return (
        <div data-testid="blog-posts" className='w-full md:w-5/6 h-fit flex flex-col justify-center'>
            <div className="w-full py-12 gap-2 h-fit flex flex-col justify-center items-center md:items-baseline md:flex-row md:flex-wrap">
                {posts.map(entry => (
                    <BlogLink entry={entry} key={entry.id}/>
                ))}
            </div>
            <nav className="w-full h-20 flex justify-center items-center">
                <button className='p-2 w-5/6 min-w bg-white border border-navy rounded-md shadow-lg ring-offset-2 ring-o transition ease-in-out delay-50 md:hover:scale-110 md:hover:bg-navy md:hover:text-white duration-200' onClick={getMorePosts}>
                    { loading ? <Loader show={true} /> : end ? "More posts coming soon!" : "Get more posts!" }
                </button>
            </nav>
        </div>
    )
}