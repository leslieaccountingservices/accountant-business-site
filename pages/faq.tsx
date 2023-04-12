import Header from "@/components/shared-ui/Header"
import QandA from "@/components/QandA"
import * as fs from 'fs'
import { GetStaticProps } from "next"
import Footer from "@/components/shared-ui/Footer"

export type TQandA = {
    question: string;
    answer: string;
}

export const getStaticProps: GetStaticProps = async () => {
    var path = require("path");

    const configDirectory = path.resolve(process.cwd(), "public/static/data/");

    const qas: Array<TQandA> = JSON.parse(fs.readFileSync(path.join(configDirectory, "faqs.json"), "utf8")) as Array<TQandA>;

    // console.log(`${JSON.stringify(reviews[1])}\n ${typeof reviews}`);

    return {
        props: {
            qas
        }
    }
}


export default function FAQ({ qas }: { qas: Array<TQandA>}) {

    return (
        <>
            <Header />
            <Banner />
            <Main qas={qas} />
        </>
    )
}

function Banner() {
    return (
    <div className='w-full h-screen bg-bone'>
        <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center'>
            <section className=' h-4/6 w-4/6 flex items-center'>
                <div className='h-3/6 w-4/6 flex flex-row'>
                    <div className='h-full w-1/3 border-r border-black flex flex-col justify-center items-center'>
                    <h4 className="text-8xl">FAQ</h4>
                    </div>
                    <div className='h-full w-2/3 flex flex-col justify-center'>
                    <h1 className='text-4xl font-light ml-4 my-4 text-white'>Frequently<br/>Asked<br/>Questions</h1>
                    <p className='ml-4 my-4'>This is a list of the most common questions we get,<br/>and their answers.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

function Main({ qas }: { qas: Array<TQandA>}) {

    return (
        <div className='z-10 absolute w-full h-fit inset-y-1/2 flex flex-col justify-center items-center'>
            <div className='w-4/6 h-fit min-h-80 transition ease-in-out duration-300 bg-bone border shadow-md rounded-md pl-8 pr-12 py-8 flex flex-col justify-between'>
                {qas.map(qa => (
                    <QandA question={qa.question} answer={qa.answer} />
                    ))}
            </div>
            <Footer />
        </div>
    )
}