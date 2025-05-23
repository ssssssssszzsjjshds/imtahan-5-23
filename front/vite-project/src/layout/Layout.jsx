import React from 'react'
import Nav from './components/Nav/Nav'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout