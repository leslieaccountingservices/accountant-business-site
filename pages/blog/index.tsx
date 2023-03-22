import Footer from "@/components/Footer";
import * as contentful from 'contentful'
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BlogLink from "@/components/BlogLink";
import { GetServerSideProps } from "next";

export interface Entry {
    metadata: contentful.Metadata;
    id: string;
    createdAt: string;
    updatedAt: string;
    type: string;
    title: string;
    slug: string;
    thumbnail: any;
    headerImage: any;
    items: any;
}

export async function getServerSideProps(context:any) {
    const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });

    const res = await client.getEntries()
    console.log(res.items[0].sys.space?.sys)
    let entriesTrimmed: Entry[] = res.items.map(item =>  (
        {
            metadata: item.metadata,
            id: item.sys.id,
            createdAt: item.sys.createdAt,
            updatedAt: item.sys.updatedAt,
            type: item.sys.contentType.sys.id,
            title: (item.fields as any).title,
            slug: (item.fields as any).slug,
            thumbnail: (item.fields as any).thumbnail.fields.file.url,
            headerImage: (item.fields as any).headerImage,
            items: (item.fields as any).items
        }
    ))

    // console.log(entriesTrimmed[0])
    return {
        props: {
            entries: entriesTrimmed
        }
    }
}

export default function Blog({ entries }: { entries: Entry[] }) {
    // console.log(`Entries:\n${JSON.stringify(entries[0])}`)
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
    return (
        <section className="h-fit w-full flex flex-col items-center relative bg-orange-300 z-0">
            <h3 className="text-3xl font-extralight ml-6">Blog</h3>
            <section className="w-full min-h-5/6 h-fit flex flex-wrap pl-6 pt-3 bg-green-500">
                {entries.map(entry => (
                    <BlogLink entry={entry} key={entry.id}/>
                ))}
            </section>
            <nav className="w-full h-20 absolute bottom-0 bg-green-400">

            </nav>
        </section>
    )
}