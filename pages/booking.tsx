import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/components/shared-ui/Loader'
import { getPaths, getPosts } from '@/lib/contentful'
import getData from '@/lib/bookings'
import { GetServerSideProps } from 'next'
import { Entry } from '@/lib/contentful'

export const getServerSideProps: GetServerSideProps = async () => {

  const posts = await getData(10, 0);
  
  return {
    props: {
      data: posts
    }
  }
}

// this one works
// export default function Booking() {

//   const [test, setTest] = useState<any>(null)
//   const testFunc = async () => {
//     setTest(await getData(10, 0))
//   }

//   useEffect(() => {
//     testFunc()
//   }, [])

//   return (
//     <div>
//       {/* <button onClick={testFunc}>fuck this shit</button> */}
//       <pre>{test === null ? <Loader show={true} /> : JSON.stringify(test)}</pre>
//     </div>
//   )
// }

export default function Booking({ data }: { data: any }) {

  const [test, setTest] = useState<any>(null)
  const testFunc = async () => {
    setTest(data)
  }

  return (
    <div>
      <button onClick={testFunc}>fuck this shit</button>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  )
}

// export default function Booking({ data }: { data: any }) {

//   const [test, setTest] = useState<any>(null)

//   const testFunc = async () => {
//     const testData = await getData(10, 0);
//     console.log(testData)
//     return testData
//   }
  
//   useEffect(() => {
//     setTest(testFunc)
//   }, [])

//   return (
//     <div>
//       {/* <button onClick={testFunc}>fuck this shit</button> */}
//       <pre>{test === null ? <Loader show={true} /> : JSON.stringify(test)}</pre>
//     </div>
//   )
// }