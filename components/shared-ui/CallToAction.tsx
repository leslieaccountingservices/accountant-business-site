import React from 'react'

export default function CallToAction({ actionText, action, type, disabled }: { actionText: string, action: () => any, type: "primary" | "secondary", disabled: boolean }) {
  return (
    <button className='p-2 w-5/6 min-w bg-white border border-navy rounded-md shadow-lg ring-offset-2 ring-o transition ease-in-out delay-50 hover:scale-110 hover:bg-navy hover:text-white duration-200' onClick={action}>
      {actionText}
    </button>
  )
}