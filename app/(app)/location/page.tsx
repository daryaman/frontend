"use client";

import  useLocate  from '@/hooks/locate'
import React from 'react'

function Location() {

  const location = useLocate();

  return (
    <>
      { location.loaded ? JSON.stringify(location) : 'Location data not available' }
    </>
  )
}

export default Location