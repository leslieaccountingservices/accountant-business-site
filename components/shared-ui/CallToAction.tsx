import React from 'react'

export default function CallToAction({ actionText, action }: { actionText: string, action: () => any }) {
  return (
    <button className='p-2 border border-solid rounded-md' onClick={action}>
      {actionText}
    </button>
  )
}
