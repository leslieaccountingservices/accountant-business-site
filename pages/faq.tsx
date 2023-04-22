import Header from "@/components/shared-ui/Header"
import QandA from "@/components/QandA"
import * as fs from 'fs'
import { GetStaticProps } from "next"
import Footer from "@/components/shared-ui/Footer"
import MetaTags from "@/components/MetaTags"
import { getFaqs } from "@/lib/contentful"
import { FAQ } from "@/lib/contentful"

export type TQandA = {
    question: string;
    answer: string;
}

export const getStaticProps: GetStaticProps = async () => {
    const faqs: Array<FAQ> = await getFaqs();

    return {
        props: {
            qas: faqs
        }
    }
}


export default function FAQs({ qas }: { qas: Array<FAQ>}) {

    return (
        <>
            <MetaTags title="Frequently Asked Questions" pageUrl={`${process.env.NEXT_PUBLIC_HOME_URL}/faq`} description="The answers to the questions we most often get asked" imgUrl="/static" />
            <Header />
            <Banner />
            <Main qas={qas} />
        </>
    )
}

function Banner() {
    return (
    <div data-testid="faq-banner" className='w-full h-screen bg-bone'>
        <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center'>
            <section className=' h-4/6 w-full md:w-4/6 flex items-center'>
                <div className='h-3/6 w-full md:w-4/6 flex flex-row'>
                    <div className='hidden h-full w-1/3 border-r border-black md:flex flex-col justify-center items-center'>
                    <h4 className="text-8xl">FAQ</h4>
                    </div>
                    <div className='h-full w-full md:w-2/3 flex flex-col justify-center'>
                    <h1 className='text-4xl font-light ml-4 my-4 text-white'>Frequently <br className="hidden md:block"/>Asked <br className="hidden md:block"/>Questions</h1>
                    <p className='text-base ml-4 my-4'>This is a list of the most common questions we get,<br/>and their answers.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

function Main({ qas }: { qas: Array<FAQ>}) {

    return (
        <div data-testid="faq-main" className='z-10 absolute w-full h-fit inset-y-96 md:inset-y-1/2 flex flex-col justify-center items-center'>
            <div className='w-full md:w-4/6 h-fit min-h-80 transition ease-in-out duration-300 bg-bone border shadow-md rounded-md pl-8 pr-12 py-8 flex flex-col justify-between'>
                {qas.map(qa => (
                    <QandA key={qa.question} question={qa.question} answer={qa.answer} />
                    ))}
            </div>
            <Footer />
        </div>
    )
}