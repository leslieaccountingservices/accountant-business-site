import React, { useEffect, useState } from 'react'
import Loader from '@/components/shared-ui/Loader'
import { getPaths, getPosts } from '@/lib/contentful'
import getData from '@/lib/bookings'
import { GetServerSideProps } from 'next'
import { Entry } from '@/lib/contentful'
import CalendarButton from '@/components/CalendarButton';

export default function Booking({ data }: { data: any }) {

  const [test, setTest] = useState<any>(null)
  const testFunc = async () => {
    setTest(data)
  }

  return (
    <div>
      <CalendarButton />
    </div>
  )
}