import Header from "@/components/shared-ui/Header";
import Footer from "@/components/shared-ui/Footer";
import Image from "next/image";
import { Entry, getPaths, getPost } from "@/lib/contentful";
import ReactMarkdown  from "react-markdown";
import MetaTags from "@/components/MetaTags";
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const paths = await getPaths();

    return {
        paths,
        fallback: true
    }
}
//try moving everything from contentful.ts to their respective files
export async function getStaticProps({ params }: { params: any }) {
    const { post } = params;

    const blogPost: Entry = await getPost(post);

    return {
        props: {
            post: blogPost
        }
    }
}

export default function Post({ post }: { post: Entry }) {
    const { isFallback } = useRouter()

    return (
        <div data-testid="post" className="h-fit">
            {!isFallback ? <MetaTags title={post.title} description={post.description} imgUrl={post.headerImage} pageUrl={`${process.env.NEXT_PUBLIC_HOME_URL}/blog/${post.id}`} /> : null}
            <Header />
            {!isFallback ? <Banner img={post.headerImage} /> : <FallbackBanner /> }
            {!isFallback ? <Article post={post} /> : <FallbackArticle />}
        </div>
    )
}

function FallbackBanner() {
    return (
        <div data-testid="post-banner" className='w-full h-screen'>
            <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center relative'>
            </div>
        </div>
    )
}

function Banner({ img }: { img: any }) {

    return (
        <div data-testid="post-banner" className='w-full h-screen'>
            <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center relative'>
                <Image priority src={img} alt="header image"
                fill
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
            </div>
        </div>
    )
}

function FallbackArticle() {
    return (
        <article data-testid="post-article" className='z-10 flex flex-col absolute w-full h-fit inset-y-1/2 md:inset-y-1/4 justify-center items-center'>
            <div className='w-full md:w-4/6 h-fit bg-bone border shadow-md rounded-md py-6 px-10'>
                <h4 className="font-bold text-4xl h-24 w-4/6 animate-pulse"></h4>
                <h5 className="ml-1 w-16 h-8 animate-pulse">By Leslie Garcia</h5>
                <p className="ml-1 text-xs w-24 h-8 font-extralight animate-pulse"></p>
                <p className="ml-1 text-xs w-24 h-8 font-extralight mb-4 animate-pulse"></p>
                <div className="w-5/6 h-96 animate-pulse">
                </div>
                    
            </div>
                <Footer />
        </article>
    )
}

function Article({ post }: { post: Entry }) {
    const { createdAt, updatedAt, title, body } = post;
    
    return (
        <article data-testid="post-article" className='z-10 flex flex-col absolute w-full h-fit inset-y-1/2 md:inset-y-1/4 justify-center items-center'>
            <div className='w-full md:w-4/6 h-fit bg-bone border shadow-md rounded-md py-6 px-10'>
                <h4 className="font-bold text-4xl">{title}</h4>
                <h5 className="ml-1 ">By Leslie Garcia</h5>
                <p className="ml-1 text-xs font-extralight">Written: {createdAt}</p>
                <p className="ml-1 text-xs font-extralight mb-4">Last update: {updatedAt}</p>
                <div className="leading-8">
                    <ReactMarkdown className="prose max-w-none prose-img:w-1/2 prose-img:h-auto prose-img:mx-auto">
                        {body}
                    </ReactMarkdown>
                </div>
                    
            </div>
                <Footer />
        </article>
    )
}