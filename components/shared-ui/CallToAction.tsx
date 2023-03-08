import React from 'react'

export default function CallToAction({ actionText }: { actionText: string}) {
  return (
    <button className='p-2 border border-solid rounded-md'>
      {actionText}
    </button>
  )
}
