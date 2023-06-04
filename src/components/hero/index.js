import React from 'react'
import money from '../../assets/images/money.png'
import hex from '../../assets/images/hex.png'
import circuit from '../../assets/images/circuit.png'

const Hero = ({visiblePlay, setVisiblePlay}) => {
    const playNow = () => {
        setVisiblePlay(!visiblePlay)
    }
    return (
        <div className='hero'>
            <div className='custom-container'>
                <div className='text-center'>
                    <img src={money} alt='money' className='mx-auto' />
                    <div className='prizemoney inline-block py-[10px] px-[36px] relative md:top-[-250px] top-[-100px] mb-[-250px]'>
                        <h2 className='text-white md:text-5xl text-2xl font-bold'><span className='md:text-[32px] text-lg'>$</span>3,204,080</h2>
                        <p className='italic text-lg text-white'>Prize pool</p>
                    </div>

                    <div className='winning-card bg-[#18213E] mt-[-50px] rounded-[28px] mb-14 max-w-[400px] w-[full] mx-auto'>
                        <div className='py-[10px] px-[16px] winning-btns'>
                            <div className='text-center'>
                                <p className='text-[12px] text-[#6B7DB7]'>Latest winning number - 16 Dec</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='item relative'>
                                    <img src={hex} alt='hex' className='inline-block mr-2' />
                                    <span className='text-2xl font-bold text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>23</span>
                                </div>
                                <div className='item relative'>
                                    <img src={hex} alt='hex' className='inline-block mr-2' />
                                    <span className='text-2xl font-bold text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>5</span>
                                </div>
                                <div className='item relative'>
                                    <img src={hex} alt='hex' className='inline-block mr-2' />
                                    <span className='text-2xl font-bold text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>46</span>
                                </div>
                                <div className='item relative'>
                                    <img src={hex} alt='hex' className='inline-block mr-2' />
                                    <span className='text-2xl font-bold text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>13</span>
                                </div>
                                <div className='item relative'>
                                    <img src={hex} alt='hex' className='inline-block mr-2' />
                                    <span className='text-2xl font-bold text-white absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>9</span>
                                </div>
                            </div>
                        </div>

                        <div className='p-[16px] flex justify-between items-center'>
                            <p className='text-lg text-white'>neonsalami.eth</p>
                            <p className='text-xl font-bold text-white'>$123,456</p>
                        </div>
                    </div>


                    <div className='text-center mb-[55px] relative'>
                        <img src={circuit} alt='circuit' className='mx-auto' />
                        <button onClick={playNow} className='text-white md:text-2xl font-bold play-btn rounded-full md:py-[16px] py-[10px] md:px-[80px] px-[30px] absolute z-20 top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            Play now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero