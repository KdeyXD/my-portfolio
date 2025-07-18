import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=' bg-gradient-to-tr from-blue-500 via-indigo-700 to-slate-900 '>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout