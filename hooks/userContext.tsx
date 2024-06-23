'use client'
import { createContext, useContext } from 'react'
import { useAuth } from './auth'
import React from 'react'
import Loading from '@/app/(app)/Loading'


export const userContext = () => {
  const { user } = useAuth({ middleware: 'auth' })

  if (!user) {
    return <Loading />
  }

  const dataUser = createContext({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.created_at,
  })

  return dataUser
}