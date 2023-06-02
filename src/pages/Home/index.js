import React from 'react'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import PastWinners from '../../components/modals/past-winners'
import Table from '../../components/table'
import TopBar from '../../components/topbar'

const Home = () => {
    const [visiblePastWinners, setVisiblePastWinners] = React.useState(false)
    return (
        <div>
            <TopBar setVisiblePastWinners={setVisiblePastWinners} visiblePastWinners={visiblePastWinners} />
            {visiblePastWinners && (
                <div className='relative'>
                    <PastWinners />
                </div>
            )}
            <Hero />
            <Table />
            <Footer />
        </div>
    )
}

export default Home