import React from 'react'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import Table from '../../components/table'
import TopBar from '../../components/topbar'

const Home = () => {
    return (
        <div>
            <TopBar/>
            <Hero/>
            <Table/>
            <Footer/>
        </div>
    )
}

export default Home