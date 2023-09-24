import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='layout'>
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout