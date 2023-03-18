import React from 'react'

export default function CallToAction({ actionText, action, type }: { actionText: string, action: () => any, type: "primary" | "secondary" }) {
  return (
    <button className='p-2 border border-solid rounded-md' onClick={action}>
      {actionText}
    </button>
  )
}
