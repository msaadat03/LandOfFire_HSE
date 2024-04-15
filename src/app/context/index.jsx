import React from 'react'
import { BgImageProvider } from './bgImageProvider'

const Providers = ({children}) => {
  return (
    <BgImageProvider>{children}</BgImageProvider>
  )
}

export default Providers