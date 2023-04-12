import React, { useEffect, useState } from 'react'
import Loader from '@/components/shared-ui/Loader'
import CalendarButton from '@/components/shared-ui/CalendarButton';

export default function Booking({ data }: { data: any }) {

  const [test, setTest] = useState<any>(null)
  const testFunc = async () => {
    setTest(data)
  }

  return (
    <div className="">
      <CalendarButton />
    </div>
  )
}