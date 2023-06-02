import React from 'react'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import PastWinners from '../../components/modals/past-winners'
import InitiatePlay from '../../components/modals/play-modals/initiate-play'
import Table from '../../components/table'
import TopBar from '../../components/topbar'

const Home = () => {
    const [visiblePastWinners, setVisiblePastWinners] = React.useState(false)
    const [visiblePlay, setVisiblePlay] = React.useState(false)
    return (
        <div>
            {
                visiblePlay && (<InitiatePlay setVisiblePlay={setVisiblePlay}/>)
            }
            <TopBar setVisiblePastWinners={setVisiblePastWinners} visiblePastWinners={visiblePastWinners} />
            {visiblePastWinners && (
                <div className='relative'>
                    <PastWinners />
                </div>
            )}
            <Hero setVisiblePlay={setVisiblePlay} visiblePlay={visiblePlay} />
            <Table />
            <Footer />
        </div>
    )
}

export default Home