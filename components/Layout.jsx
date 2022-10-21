import React from 'react'
import HomeA from '../pages/HomeA'
import Footer from './Footer'
import HomeB from './HomeB'
import HomeC from './HomeC'
import HomeD from './HomeD'
import HomeE from './HomeE'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <HomeA />
            <HomeB />
            <HomeC />
            <HomeD />
            <HomeE />
            <Footer />
        </div>
    )
}

export default Layout