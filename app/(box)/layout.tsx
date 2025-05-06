import React, { Children } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

const layout = ({ children }: { children: React.ReactNode })=> {
  return (
    <div>
    <Nav/>
    <div>{children}</div>
    <Footer />
    </div>
  )
}

export default layout