import Header from "@/components/shared-ui/Header";
import Footer from "@/components/shared-ui/Footer";
import Image from "next/image";
import { getPaths, getPost } from "@/lib/contentful";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import MetaTags from "@/components/MetaTags";

export async function getStaticPaths() {
    const paths = await getPaths();

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }: { params: any }) {
    const { post } = params;

    const blogPost = await getPost(post);

    return {
        props: {
            post: blogPost
        }
    }
}

export default function Post({ post }: { post: any }) {
    return (
        <div className="h-fit">
            <MetaTags title={post.title} description={post.description} imgUrl={`http:${post.headerImage.fields.file.url}`} pageUrl={`${process.env.NEXT_PUBLIC_HOME_URL}/blog/${post.id}`} />
            <Header />
            <Banner post={post} />
            <Article post={post} />
            <Footer />
        </div>
    )
}

function Banner({ post }: { post: any }) {

    return (
        <div className='w-full h-screen'>
        <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center relative'>
            <Image src={`http:${post.headerImage.fields.file.url}`} alt="header image"
            fill
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            />
        </div>
    </div>
    )
}

function Article({ post }: { post: any}) {
    const { createdAt, updatedAt, title, body  } = post;
    
    return (
        <article className='z-10 flex flex-col absolute w-full h-fit inset-y-1/2 md:inset-y-1/4 justify-center items-center'>
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