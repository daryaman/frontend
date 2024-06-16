import React, { ReactNode } from 'react'
import MainHeader from './partials/header'
import WebFooter from './partials/footer'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

function webLayout({ children }: Props) {
  return (
    <div className='bg-slate-900 text-slate-200'>
      <div className='grid grid-cols-1 justify-items-center'>
          <MainHeader />
      </div>
      <div className='grid grid-cols-1 justify-items-center bg-slate-950 py-5'>
          <main className='w-10/12'>{children}</main>
      </div>
      <div className='grid grid-cols-1 justify-items-center'>
          <WebFooter />
      </div>

    </div>
  )
}

export default webLayout