import React from 'react'
import powerball from '../../../../assets/images/powerball.svg'

const InitiatePlay = ({setVisiblePlay}) => {
    const hideModal = () => {
        setVisiblePlay(false)
    }
    return (
        <>
        <div onClick={hideModal} className='modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-transparent'></div>
        <div className='initiate-play max-w-[700px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
            <div className='modal-header py-[24px] text-center'>
                <img src={powerball} alt='powerball' className='mx-auto' />
            </div>
            <div className='modal-body py-[40px] px-[56px]'>
                <div className='text-center mb-[80px]'>
                    <h2 className='text-5xl font-bold text-white'>
                        <span className='text-[32px]'>$</span>149,000,000
                    </h2>
                    <p className='font-light text-[#959EBA] mt-[16px]'>Saturday 9:59</p>
                </div>

                <div className='grid grid-cols-2 gap-[16px]'>
                    <div className='col-span-2'>
                        <button className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
                            Pick your own numbers
                        </button>
                    </div>
                    <div className='col-span-1'>
                        <button className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
                            $2 Quick Pick
                        </button>
                    </div>
                    <div className='col-span-1'>
                        <button className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
                            $10 Quick Pick
                        </button>
                    </div>
                    <div className='col-span-1'>
                        <button className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
                            $20 Quick Pick
                        </button>
                    </div>
                    <div className='col-span-1'>
                        <button className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
                            Other Amounts
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InitiatePlay