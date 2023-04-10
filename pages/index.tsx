import Header from '../components/Header'
import Footer from '@/components/Footer'
import CallToAction from '@/components/shared-ui/CallToAction'
import Review from '@/components/Review'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CalendarButton from '@/components/CalendarButton'
import MetaTags from '@/components/MetaTags'

export default function Home() {

  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <MetaTags title="Leslie's Accounting Services" pageUrl='http://localhost:3000/' imgUrl='/static/images/logo.jpg' description="Leslie's Accounting Services is an accounting firm local to Chicago, and handles accountant matters such as bookkeeping, payroll, financial planning, and personal, business, and corporate taxes." />
      <Header isHome={isHome} />
      <Banner />
      <Main />
      {/* <main className='w-full h-fit flex flex-col items-center pt-16'>
        <Intro />
        <About />
        <Services />
        <Reviews />
        <UserQualifier />
      </main> */}
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
              <CalendarButton />
              <button className='h-10 min-w-fit w-48 bg-myorange px-1 mt-2 text-bone border rounded-md shadow-md hover:animate-pulse'>Learn more</button>
            </div>
            <div className='h-full w-2/3 flex flex-col justify-center'>
              <h1 className='text-4xl font-light ml-4 my-4 text-white'>Accounting you can count on</h1>
              <p className='ml-4 my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Link className='ml-4 my-2 text-navy underline' href=''>
                Get started with a free consultation!
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className='z-10 absolute w-full h-fit inset-y-1/2 flex justify-center items-center'>
      <div className='w-4/6 h-fit bg-bone border shadow-md rounded-md'>
        <Appeal />
        <About />
        <Services />
        <Reviews />
        <Footer />
      </div>
    </div>
  )
}

function Appeal() {
  return (
    <section className='w-full h-fit flex flex-col px-2'>
      <h3 className='w-full h-24 flex justify-center items-center text-3xl font-light'>Why Leslie's Accounting Services</h3>
      <div className='flex justify-around'>
        <section className='w-2/6 h-56  flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Experience</h4>
          <p className='text-center text-lg'>With over 8 years of experience serving many different industries, Leslie's Accounting Services is the place to make your money matter.</p>
        </section>
        <section className='w-2/6 h-56 flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Straightforward Pricing</h4>
          <p className='text-center text-lg'>Here at Leslie's Accounting Services, we believe in tranparency. Here, you'll never run into any hidden fees. Pricing for our various services can be found <Link className='text-navy' href={''}>here</Link>.</p>
        </section>
        <section className='w-2/6 h-56 flex flex-col items-center justify-center'>
          <h4 className='text-navy text-xl font-semibold'>Client-first Service</h4>
          <p className='text-center text-lg'>Whether it be through exceptional customer service, flexible scheduling, or our competative pricing, you will always come first at Leslie's accounting Services.</p>
        </section>
      </div>
    </section>
  )
}


function Services() {
  return (
    <section className='w-full h-screen'>
      <h3 className='w-full h-24 flex justify-center items-center text-3xl font-light'>Services</h3>
      <div className='w-full h-5/6 flex justify-around items-center'>
        <section className='w-80 h-5/6 border border-forest bg-bone shadow-md rounded-md'>
          <h4 className='w-full text-center text-navy text-xl font-semibold'>Compliance</h4>
          <ul className='mt-10 ml-8 text-black list-disc flex flex-col justify-between'>
            <li className='my-2'>Corporate Taxes</li>
            <li className='my-2'>Business Taxes</li>
            <li className='my-2'>Personal Taxes</li>
            <li className='my-2'>Local Sales Tax</li>
            <li className='my-2'>Legally Required Corporate Documentation</li>
          </ul>
        </section>

        <section className='w-80 h-5/6 border border-forest bg-bone shadow-md rounded-md'>
          <h4 className='w-full text-center text-navy text-xl font-semibold'>Management</h4>
          <ul className='mt-10 ml-8 text-black list-disc flex flex-col justify-between'>
            <li className='my-2'>Bookkeeping
              <ul className='list-square ml-8 mr-4 my-1'>
                <li>Manage daily transactions</li>
              </ul>
            </li>
            <li className='my-2'>Payroll
              <ul className='list-square ml-8 mr-4 my-1'>
                <li>Management of payroll and taxes</li>
              </ul>
            </li>
            <li className='my-2'>Planning
              <ul className='list-square ml-8 mr-4 my-1'>
                <li>Reporting and advice to <span className='text-forest font-bold'>support growth</span></li>
              </ul>
            </li>
          </ul>
        </section>

        <section className='w-80 h-5/6 border border-forest bg-bone shadow-md rounded-md'>
          <h4 className='w-full text-center text-navy text-xl font-semibold'>Advisory</h4>
          <ul className='mt-10 ml-8 text-black list-disc flex flex-col justify-between'>
            <li className='my-2'>Reporting
              <ul className='list-square ml-8 mr-4 my-1'>
                <li>Help directors make informed finance and <span className='text-forest font-bold'>accounting decisions</span></li>
              </ul>
            </li>
            <li className='my-2'>Quick Books Training
              <ul className='list-square ml-8 mr-4 my-1'>
                <li><span className='text-forest font-bold'>Training</span> in a one-on-one setting or group setting</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className='bg-white w-full h-screen flex flex-col justify-center items-center'>
      <h3 className='w-full h-24 flex justify-center items-center text-3xl font-light'>About Us</h3>
      <div className='w-full h-5/6 flex flex-col justify-center items-center'>
        <section className='w-5/6 h-3/6 flex '>
          <div className='h-full w-3/6 flex items-center'>
            <div className='w-full h-5/6 bg-white relative'>
              <Image fill src="/static/images/accountant.jpeg" alt="accounting stock image" />
            </div>
          </div>
          <div className='h-full w-3/6 flex flex-col justify-center items-center'>
            <h4 className='w-full text-center text-navy text-xl font-semibold'>About Leslie</h4>
            <p className='text-sm px-2'> Leslie Garcia  graduated from DeVry University with a bachelors in business administration. She then received her Masters degree from Keller Graduate University in Accounting and Finance. Leslie has successfully helped businesses get started as well as conduct their accounting. She has more than eight years of experience in the industry. She has experience working with all types of businesses such as construction, retail, cafes, attorneys, stores, vendors, payroll, and more.</p>
          </div>
        </section >
        <section className='w-5/6 h-3/6 flex'>
          <div className='h-full w-3/6 flex flex-col justify-center items-center'>
            <h4 className='w-full text-center text-navy text-xl font-semibold'>Giving Back</h4>
            <p className='text-sm px-2'>Leslie believes in giving back. She is associated board member of HOW (Housing Opportunities for Women). HOW helps find affordable housing for low income women and their children.</p>
          </div>
          <div  className='h-full w-3/6 flex justify-center items-center'>
            <div  className='w-full h-5/6 bg-white relative'>
              <Image fill src="/static/images/charity.jpeg" alt="charity stock image" />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className='h-screen w-full flex flex-col bg-white'>
      <h4 className='w-full h-24 flex justify-center items-center text-3xl font-light'>Reviews</h4>
      <div className='w-full h-fit flex flex-col justify-start items-center'>
        {[1, 2, 3].map(i => (
          <Review key={i} />
        ))}
      </div>
      <div className='w-full flex flex-1 flex-col justify-center items-center'>
        See more reviews!  {/* make this a link */}
      </div>
    </section>
  )
}

// function Intro() {
//   return (
//     <section className='w-4/6 h-screen flex flex-row'>
//       <div className="w-3/6 flex justify-center items-center">
//         <div className='w-5/6 h-fit'>
//           <h3 className='text-6xl antialiased font-extrabold'>Accounting you can count on</h3>
//           <p className='text-2xl leading-loose'>Get started with a free consultation!</p>
//           <CallToAction actionText='Book Now!' action={() => { console.log("callToAction pressed!")}} type="primary" disabled={false} />
//         </div>
//       </div>
//       <div className="w-3/6 flex justify-center items-center">
//         <img className="max-w-5/6 h-auto" src="/static/images/10x8-wide-example.jpeg" alt="image of Leslie Garcia" />
//       </div>
//     </section>
//   )
// }