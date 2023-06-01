import React from 'react'
import Hero from '../../components/hero'
import Table from '../../components/table'
import TopBar from '../../components/topbar'

const Home = () => {
    return (
        <div>
            <TopBar/>
            <Hero/>
            <Table/>
        </div>
    )
}

export default Home