import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPosts, getPost } from "@/lib/contentful";

export async function getStaticPaths() {
    const paths = await getPosts(0, 0, "getStaticPaths");

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }: { params: any }) {
    const { post } = params;

    const blogPost = await getPost(post)
    console.log(blogPost)

    return {
        props: {
            post: blogPost
        }
    }
}

export default function Post({ post }: { post: any }) {
    return (
        <>
            <Header page="post" />
                <Article post={post} />
            <Footer />
        </>
    )
}

function Listicle() {
    return (
        <main>

        </main>
    )
}

function Article({ post }: { post: any}) {
    const { createdAt, updatedAt, title, headerImage, items  } = post;
    return (
        <main className="h-fit w-full pt-16">
            <h3>{title}</h3>
        </main>
    )
}