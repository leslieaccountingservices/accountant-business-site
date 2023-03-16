import Header from '../components/Header'
import Footer from '@/components/Footer'
import CallToAction from '@/components/shared-ui/CallToAction'
import Review from '@/components/Review'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-fit">
      <Header page="home" />
      <main className='w-full h-fit flex flex-col items-center bg-slate-500 pt-16'>
        <Intro />
        <Services />
        <About />
        <Reviews />
        <UserQualifier />
      </main>
      <Footer />
    </div>
  )
}

function Intro() {
  return(
    <section className='w-4/6 h-screen flex flex-row bg-gray-400'>
      <div className="w-3/6 flex justify-center items-center bg-purple-300">
        <div className='w-5/6 h-fit bg-violet-200'>
          <h3 className='text-6xl antialiased font-extrabold'>Accounting you can count on</h3>
          <p className='text-2xl leading-loose'>Get started with a free consultation!</p>
          <CallToAction actionText='Book Now!' action={() => { console.log("callToAction pressed!")}} />
        </div>
      </div>
      <div className="w-3/6 bg-cyan-300 flex justify-center items-center">
        <img className="max-w-5/6 h-auto" src="/static/images/10x8-wide-example.jpeg" alt="image of Leslie Garcia" />
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className='w-4/6 bg-teal-400 h-screen'>
      <h3 className='h-1/6 flex justify-center items-center text-3xl font-semibold'>Services</h3>
      <div className='w-full h-5/6 flex justify-around items-center'>
        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Compliance</h4>
          <ul>

          </ul>
        </section>

        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Management</h4>
          <ul>

          </ul>
        </section>

        <section className='w-80 h-5/6 bg-green-200 rounded-md'>
          <h4 className='w-full text-center'>Advisory</h4>
          <ul>

          </ul>
        </section>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className='w-4/6 bg-green-400 h-screen flex flex-col justify-center items-center'>
      <h3 className='h-1/6 flex justify-center items-center text-3xl font-semibold'>About Us</h3>
      <div className='w-full h-5/6 flex flex-col justify-center items-center bg-slate-400'>
        <section className='w-5/6 h-3/6 bg-yellow-100 flex '>
          <div className='h-full w-3/6 flex justify-center items-center bg-sky-700'>
            <div className='w-5/6 h-4/6 bg-white'>
              {/* <Image fill src="/static/images/accountant.jpeg" alt="accounting stock image" /> */}
            </div>
          </div>
          <div className='h-full w-3/6 bg-red-700 flex flex-col justify-center items-center'>
            <h4 className='w-full text-center'>About Leslie</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quod aliquam omnis corrupti itaque, architecto laborum fugiat, cumque reprehenderit mollitia assumenda sed ullam repellat culpa necessitatibus voluptatum explicabo quo amet.</p>
          </div>
        </section >
        <section className='w-5/6 h-3/6 bg-orange-100 flex'>
          <div className='h-full w-3/6 bg-red-700 flex flex-col justify-center items-center'>
            <h4 className='w-full text-center'>Giving Back</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore dolorem neque nostrum molestias, esse quibusdam facilis sunt dignissimos doloribus impedit vitae, sapiente nam, quos error delectus harum reiciendis nesciunt!</p>
          </div>
          <div  className='h-full w-3/6 flex justify-center items-center bg-sky-700'>
            <div  className='w-5/6 h-4/6 bg-white'>
              {/* <Image fill src="/static/images/charity.jpeg" alt="charity stock image" /> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className='h-screen w-4/6 flex flex-col bg-indigo-400 '>
      <h4 className='h-1/6 flex justify-center items-center text-3xl font-semibold'>Reviews</h4>
      <div className='w-full h-fit flex flex-col justify-start items-center bg-slate-400'>
        {[1, 2, 3].map(i => (
          <Review key={i} />
        ))}
      </div>
      <div className='w-full flex flex-1 flex-col justify-center items-center bg-sky-600'>
        See more reviews!  {/* make this a link */}
      </div>
    </section>
  )
}

function UserQualifier() {
  return (
    <section className='w-4/6 bg-purple-400 h-screen'>
      <h4 className='h-1/6 flex justify-center items-center text-3xl font-semibold'>User Qualifier</h4>
    </section>
  )
}