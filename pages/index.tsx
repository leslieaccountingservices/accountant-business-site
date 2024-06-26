import Header from '../components/shared-ui/Header'
import Footer from '@/components/shared-ui/Footer'
import Review from '@/components/Review'
import Link from 'next/link'
import Image from 'next/image'
import CalendarButton from '@/components/shared-ui/CalendarButton'
import MetaTags from '@/components/MetaTags'
import { GetStaticProps } from 'next'
import * as fs from 'fs'
import { getServicesPrices, IPackages, ServicePricing, getPackages } from '@/lib/contentful'
import ReactMarkdown  from "react-markdown"
import clsx from 'clsx'

export interface IReview {
  id: string;
  imageUrl: string;
  fName: string;
  lName: string;
  rating: number;
  review: string;
}

export interface Pricing {
  price: number;
  details: string | null;
}

export interface Service {
  name: string,
  details: string | null
}

export interface Prices {
  service: Service;
  pricing: Pricing;
}

// export type 

export const getStaticProps: GetStaticProps = async () => {
  var path = require("path");
  const dataDirectory = path.resolve(process.cwd(), "public/static/data/");

  const reviews: Array<IReview> = JSON.parse(fs.readFileSync(path.join(dataDirectory, "reviews.json"), "utf8")) as Array<IReview>;

  const pricing: Array<Prices> = JSON.parse(fs.readFileSync(path.join(dataDirectory, "pricing.json"), "utf-8")) as Array<Prices>;

  const servicePrices = await getServicesPrices();

  const packages: Array<IPackages> = await getPackages();

  return {
    props: {
      reviews,
      pricing,
      servicePrices,
      packages
    }
  }
}

export default function Home(props: any) {

  return (
    <>
      <MetaTags title="Leslie's Accounting Services" pageUrl={`${process.env.NEXT_PUBLIC_HOME_URL}`} imgUrl='/static/images/logo.jpg' description="Leslie's Accounting Services is an accounting firm local to Chicago, and handles accountant matters such as bookkeeping, payroll, financial planning, and personal, business, and corporate taxes." />
      <Header />
      <Banner />
      <Main packages={props.packages} servicePrices={props.servicePrices} pricing={props.pricing} reviews={props.reviews} />
    </>
  )
}

function Banner() {

  return (
    <div className='w-full h-screen bg-bone'>
      <div className='w-full h-5/6 bg-gradient-to-r from-contrast to-forest flex justify-center'>
        <section className=' h-4/6 w-full md:w-4/6 flex items-center justify-center md:justify-start'>
          <div className='h-3/6 w-fit xl:w-4/6 px-4 md:px-0 flex flex-col-reverse md:flex-row'>
            <div className='h-full w-fit md:w-1/3 md:border-r border-black flex md:flex-col justify-center items-center'>
              <CalendarButton freeConsult={false} />
              <Link href="/#about">
                <button className='h-10 min-w-fit w-5/6 md:w-48 mx-1 md:mx-0 bg-myorange px-1 md:mt-2 text-bone border rounded-md shadow-md md:transition md:ease-in-out md:delay-50 md:hover:scale-110'>
                  Learn more
                </button>
              </Link>
            </div>
            <div className='md:h-full w-full md:w-2/3 flex flex-col justify-center'>
              <h1 className='text-4xl font-light md:ml-4 md:my-4 text-white'>Accounting you can count on</h1>
              <p className='text-sm md:text-base md:ml-4 md:my-4'>Whether it&apos;s corporate taxes, small business taxes, or just dealing with your personal taxes, you can count on Leslie&apos;s Accounting Services to keep your money in your wallet.</p>
              <Link href="/faq" className='ml-4 my-2 text-navy underline hidden md:block'>
                Have questions? Check out our FAQ!
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Main({ packages, servicePrices = [], reviews = [], pricing = [] }: { packages: Array<IPackages>, servicePrices: any, reviews: IReview[], pricing: Array<Prices> }) {

  return (
    <div className='z-10 absolute w-full h-fit inset-y-1/2 flex justify-center items-center'>
      <main className='w-screen max-w-6xl lg:w-4/6 h-fit bg-bone border shadow-md rounded-md'>
        <Appeal />
        <About />
        <Services servicePrices={servicePrices} />
        <Packages packages={packages} />
        <Reviews reviews={reviews} />
        <Footer isHome />
      </main>
    </div>
  )
}

function Appeal() {
  return (
    <section className='w-full h-fit flex flex-col px-2'>
      <h3 className="w-full h-24 text-center md:text-left flex justify-center items-center text-3xl font-light">Why Leslie&apos;s Accounting Services</h3>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-around'>
        <article className='w-full h-56  flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Experience</h4>
          <p className='text-center text-base xl:text-lg'>With over 8 years of experience serving many different industries, Leslie&apos;s Accounting Services is the place to make your money matter.</p>
        </article>
        <article className='w-full h-56 flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Straightforward Pricing</h4>
          <p className='text-center text-base xl:text-lg'>Here at Leslie&apos;s Accounting Services, we believe in tranparency. Here, you&apos;ll never run into any hidden fees. Pricing for our various services can be found <Link className='text-navy' href={''}>here</Link>.</p>
        </article>
        <article className='w-full h-56 flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Client-first Service</h4>
          <p className='text-center text-base xl:text-lg'>Whether it be through exceptional customer service, flexible scheduling, or our competative pricing, you will always come first at Leslie&apos;s accounting Services.</p>
        </article>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className='bg-white w-full h-fit flex flex-col justify-center items-center scroll-mt-20 md:scroll-mt-16'>
      <h3 className='w-full h-24 flex justify-center items-center text-3xl font-light'>About Us</h3>
      <div className='w-full h-fit md:h-5/6 flex flex-col justify-center items-center'>
        <article className='w-full md:w-5/6 h-fit md:h-3/6 flex flex-col items-center md:flex-row '>
          <div className='h-52 md:h-80 w-full md:w-3/6 flex items-center relative' >
              <Image fill src="/static/images/accountant.jpeg" alt="accounting stock image" />
          </div>
          <div className='h-3/6 md:h-full w-full md:w-3/6 flex flex-col justify-center items-center mb-8 md:mb-0'>
            <h4 className='w-full text-center text-navy text-xl font-semibold my-2 md:my-0'>About Leslie</h4>
            <p className='text-sm px-2'> Leslie Garcia  graduated from DeVry University with a bachelors in business administration. She then received her Masters degree from Keller Graduate University in Accounting and Finance. Leslie has successfully helped businesses get started as well as conduct their accounting. She has more than eight years of experience in the industry. She has experience working with all types of businesses such as construction, retail, food service, attorneys, stores, vendors, payroll, and more.</p>
          </div>
        </article>
        <article className='w-full mb-4 md:w-5/6 h-fit md:h-3/6 flex flex-col-reverse md:flex-row items-center'>
          <div className='h-full w-full md:w-3/6 flex flex-col justify-center items-center mb-4 md:mb-0'>
            <h4 className='w-full text-center text-navy text-xl font-semibold my-2 md:my-0'>Entrepreneurship</h4>
            <p className='text-sm px-2'>Leslie believes in entrepreneurship. Not only has she helped many start their own businesses, but she also owns her own business as well, called <Link className={`text-navy font-base underline`} href={`http://gemzandboardz.com/`} target="_blank">GemzandBoardz</Link>. With her experience, she is more than prepared to meet your business needs. Book your appointment today!</p>
          </div>
          <div  className='h-52 md:h-full w-3/6 md:w-3/6 flex justify-center items-center'>
            <div  className='h-52 md:h-80 w-full  flex items-center relative'>
              <Image fill src="/static/images/charity.jpeg" alt="charity stock image" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Services ({ servicePrices }: { servicePrices: Array<ServicePricing> }) {

  return servicePrices.length > 0 ? 
   (
    <section className="h-fit w-full flex flex-col bg-white scroll-mt-20 md:scroll-mt-16">
      <h4 className="w-full h-24 flex justify-center items-center text-3xl font-light px-2">Our Services</h4>
      <article className='flex flex-col h-fit w-full px-2 md:px-16'>
        {servicePrices.map((service) => (
          <div key={service.serviceName} className='my-4 md:my-6 border-t md:border-t-0 md:flex md:justify-between md:w-full'>
            <div>
              <h5 className='text-2xl'>{service.serviceName}</h5>
              {service.subPricing ? 
              <ReactMarkdown className="prose max-w-none text-xs font-light text-navy prose-img:w-1/2 prose-img:h-auto prose-img:mx-auto">
                  {service.subPricing}
              </ReactMarkdown>
              : null}
            </div>
            {service.price > 0 ? 
            <p className='text-sm md:text-lg font-light'>${service.price}
            {service.priceDetails ? `, ${service.priceDetails}` : null}
            </p>
            :
            <p className='text-sm md:text-lg font-light'>Varies</p>
            }
          </div>
        ))}
      </article>
      <article className='text-center my-6'>
        <p className='text-sm font-bold'>Know what you&apos;re looking for? <Link className='text-navy font-base underline' target='_blank' href={`https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_USERNAME}`}>Book your appointment now!</Link></p>
        <p className='text-xs font-extralight'>You will not be charged at this time.</p>
      </article>
    </section>
   ) : null
}

export function Packages({ packages }: { packages: Array<IPackages> }) {

  return packages.length > 0 ? (
    <>
    <h4 className='w-full h-24 -mb-4 flex justify-center items-center text-3xl font-light'>Packages</h4>
    <section className="relative mb-8 mt-4 max-w-2xl mx-auto pb-8 sm:mt-12 lg:max-w-8xl lg:pb-0 scroll-mt-20 md:scroll-mt-16 flex flex-col-reverse">
      {/* <div aria-hidden="true" className="w-full hidden absolute top-4 bottom-6 inset-0 bg-white/[0.07] rounded-tl-lg rounded-tr-lg lg:block"></div> */}
      {packages.map((pack, i) => (
        <article key={pack.title} className={clsx("my-4 pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12", {
          "bg-forest text-white ring-2 ring-white-800": i === 1,
          "bg-white text-black ring-2 ring-slate-700": i !== 1
        })}>
          <h3 className="text-sm font-semibold uppercase tracking-wide flex justify-between gap-4 mb-5 ">{pack.title} <span className=" text-sm normal-case tracking-normal">{pack.desc}</span></h3>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
            <div className="mt-3 flex items-center">
              <span className={clsx("text-slate-300 font-normal text-4xl", {
                "text-zinc-200": i === 1,
                "text-slate-500": i !== 1
              })}>$</span>
              <p className="text-5xl font-bold tracking-tight ">{pack.cost}</p>
              <div className="ml-4">
              <p className="text-sm ">USD</p>
              <p className={clsx("text-sm",
                {
                  "text-zinc-200": i === 1,
                  "text-slate-500": i !== 1
                }
              )}>Billed {pack.period}</p>
              </div>
            </div>
            <Link target="_blank" href={pack.link ? pack.link : `https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_USERNAME}/free-consultation`} className={clsx("mt-6 w-full inline-block py-2 px-8 border transition-color duration-300 border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full", {
              "bg-white/20 hover:bg-white/30 ": i === 1,
              "bg-slate-400 hover:bg-slate-300": i !== 1
            })}>Get Started</Link>
          </div>
          <ul role="list" className="border-zinc-500 divide-zinc-500 divide-opacity-75 mt-7 border-t divide-y lg:border-t-0">
            {pack.includes.map(included => (
              <li key={included} className={clsx("py-3 flex items-center"
              )}>
                <svg className="text-zinc-300 w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>{included}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
    </>
  ) : null
}

// export function Pricing({ pricing }: { pricing: Array<Prices> }) {

//   return (
//     <section className="h-fit w-full flex flex-col bg-white scroll-mt-20 md:scroll-mt-16">
//       <h4 className="w-full h-24 flex justify-center items-center text-3xl font-light px-2">Pricing</h4>
//       <article className='flex flex-col h-fit w-full px-2 md:px-16'>
//         {pricing.map((item) => (
//           <div key={item.service.name} className='my-4 md:my-6 border-t md:border-t-0 md:flex md:justify-between md:w-full'>
//             <div>
//               <h5 className='text-2xl'>{item.service.name}</h5>
//               <p className='text-xs font-light text-navy'>{item.service.details}</p>
//             </div>
//             <div>
//               <p className='text-sm md:text-lg font-light'>${item.pricing.price} {item.pricing.details}</p>
//             </div>
//           </div>
//         ))}
//       </article>
//       <article className='text-center my-6'>
//         <p className='text-sm font-bold'>Know what you&apos;re looking for? <Link className='text-navy font-base underline' target='_blank' href={`https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_USERNAME}`}>Book your appointment now!</Link></p>
//         <p className='text-xs font-extralight'>You will not be charged at this time.</p>
//       </article>
//     </section>
//   )
// }

export function Reviews({ reviews }: { reviews: IReview[] }) {
  return (
    <section id="reviews" className='h-fit w-full flex flex-col bg-white scroll-mt-20 md:scroll-mt-16'>
      <h4 className='w-full h-24 flex justify-center items-center text-3xl font-light'>Reviews</h4>
      <div className='w-full h-fit flex flex-col justify-start items-center'>
        {reviews.map((review: IReview) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className='w-full flex flex-1 flex-col justify-center items-center mb-4 md:mb-0'>
        <Link className="text-sm underline text-navy mb-2" href={`https://www.facebook.com/lesliesaccountingchicago/reviews`}>
          See more reviews!
        </Link>
      </div>
    </section>
  )
}