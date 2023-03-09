import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BlogLink from "@/components/BlogLink";
import { GetServerSideProps } from "next";

export default function Blog() {
    return (
        <>
            <MetaTags title="Blog" description="Leslie's Accounting Services Blog" pageUrl="localhost:3000/blog" imgUrl="/static/images/charity.jpeg" />
            <Header />
            <main className="w-full flex flex-col justify-center items-center h-fit pt-16 bg-cyan-100 z-0">
                <div className="w-4/6 min-h-screen flex flex-row bg-slate-200">
                    <Categories />
                    <Posts />
                </div>
            </main>
            <Footer />
        </>
    )
}

function Categories() {
    return (
        <section className="h-full w-2/6 bg-purple-300">
            <h3 className=" text-3xl font-extralight text-right mr-6">Categories</h3>
            <div>

            </div>
        </section>
    )
}

function Posts() {
    return (
        <section className="h-fit w-4/6 flex flex-col items-center relative bg-orange-300 z-0">
            <h3 className="flex self-start text-3xl font-extralight ml-6">Blog</h3>
            <section className="w-full flex flex-1 flex-col content-around pl-6 pt-3 bg-green-500">
                {[1, 2, 3, 4, 5].map(i => (
                    <BlogLink />
                ))}
            </section>
            <nav className="w-full h-20 absolute bottom-0 bg-green-400">

            </nav>
        </section>
    )
}