import React from 'react'

export default function Loader({ show }: { show: boolean }) {
  return (show ?
    <div className='w-12 h-12 border-8 border-green-400 animate-spin'>
        Loader
    </div>
    : null
  )
}
