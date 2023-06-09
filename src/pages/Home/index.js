import React from 'react'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import FaqModal from '../../components/modals/faq-modal'
import HowToPlay from '../../components/modals/how-to-play'
import PastWinners from '../../components/modals/past-winners'
import InitiatePlay from '../../components/modals/play-modals/initiate-play'
import Responsibility from '../../components/modals/responsibility/indes'
import Table from '../../components/table'
import TopBar from '../../components/topbar'

const Home = () => {
    const [visiblePastWinners, setVisiblePastWinners] = React.useState(false)
    const [visiblePlay, setVisiblePlay] = React.useState(false)
    const [visibleFaq, setVisibleFaq] = React.useState(false)
    const [visibleHowToPlay, setVisibleHowToPlay] = React.useState(false)
    const [visibleResponsibility, setVisibleResponsibility] = React.useState(false)
    return (
        <div>
            {
                visiblePlay && (<InitiatePlay setVisiblePlay={setVisiblePlay} />)
            }
            {
                (visibleFaq && <FaqModal setVisibleFaq={setVisibleFaq} />)
            }
            {
                (visibleHowToPlay && <HowToPlay setVisibleHowToPlay={setVisibleHowToPlay} />)
            }
            {
                (visibleResponsibility && <Responsibility setVisibleResponsibility={setVisibleResponsibility} />)
            }
            <TopBar setVisiblePastWinners={setVisiblePastWinners} visiblePastWinners={visiblePastWinners} setVisibleFaq={setVisibleFaq} setVisibleHowToPlay={setVisibleHowToPlay} setVisibleResponsibility={setVisibleResponsibility} />
            {visiblePastWinners && (
                <div className='relative'>
                    <PastWinners setVisiblePastWinners={setVisiblePastWinners} />
                </div>
            )}
            <Hero setVisiblePlay={setVisiblePlay} visiblePlay={visiblePlay} />
            <Table />
            <Footer setVisibleFaq={setVisibleFaq} setVisibleHowToPlay={setVisibleHowToPlay} setVisibleResponsibility={setVisibleResponsibility} />
        </div>
    )
}

export default Home