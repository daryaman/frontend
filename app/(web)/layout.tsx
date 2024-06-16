import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

function webLayout({ children }:Props) {
  return (
    <div>
      Header untuk webite
      <main>{children}</main>
    </div>
  )
}

export default webLayout