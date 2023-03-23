import React from 'react'

export default function CallToAction({ actionText, action, type, disabled }: { actionText: string, action: () => any, type: "primary" | "secondary", disabled: boolean }) {
  return (
    <button className='p-2 w-fit min-w border border-solid rounded-md ring-offset-2 ring-o' onClick={action}>
      {actionText}
    </button>
  )
}