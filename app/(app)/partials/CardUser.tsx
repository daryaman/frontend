'use client'

import { useAuth } from '@/hooks/auth'
import React from 'react'
import Loading from '../Loading'

const CardUser = () => {
  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <Loading />
  }

  const timestamp = user.created_at
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className='flex flex-col space-y-2'>
      <p className='w-full flex flex-row'>
        <div className='w-1/3'>Name</div>
        <div className='w-2/3'>: &nbsp;{user.name}</div>
      </p>
      <p className='w-full flex flex-row'>
        <div className='w-1/3'>Email</div>
        <div className='w-2/3'>: &nbsp;{user.email}</div>
      </p>
      <p className='w-full flex flex-row'>
        <div className='w-1/3'>Terdaftar</div>
        <div className='w-2/3'>: &nbsp;{formattedDate}</div>
      </p>
    </div>
  )
}

export default CardUser