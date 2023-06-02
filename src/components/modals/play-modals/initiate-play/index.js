import React from 'react'
import powerball from '../../../../assets/images/powerball.svg'

import { FiArrowLeft } from 'react-icons/fi'
import { RxShuffle } from 'react-icons/rx'

const InitiatePlay = ({ setVisiblePlay }) => {
    const [start, setStart] = React.useState(false)
    const [selected, setSelected] = React.useState([])
    const hideModal = () => {
        setVisiblePlay(false)
    }

    const handleStart = () => {
        setStart(!start)
    }

    const handleShuffle = () => {
        setSelected([])
    }

    return (
        <>
            <div onClick={hideModal} className='modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-transparent'></div>
            <div className='initiate-play max-w-[700px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
                <div className='modal-header flex justify-between items-center py-[24px] text-center px-[24px]'>
                    {
                        start && <button onClick={handleStart}><FiArrowLeft className='text-white text-xl' /></button>
                    }
                    <img src={powerball} alt='powerball' className='mx-auto' />
                    {
                        start && <button onClick={handleShuffle}>
                            <RxShuffle className="text-white text-xl" />
                        </button>
                    }
                </div>
                {
                    start ? (
                        <div className='modal-body py-[40px] px-[56px]'>
                            <div className='flex justify-center items-center gap-[16px]'>
                                <div className={`${selected[0] ? "selected-ball" : "not-selected-ball"} rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                                    <p className='text-white text-lg font-[500]'>
                                        {
                                            selected[0] ? selected[0] : ""
                                        }
                                    </p>
                                </div>
                                <div className={`${selected[1] ? "selected-ball" : "not-selected-ball"} rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                                    <p className='text-white text-lg font-[500]'>
                                        {
                                            selected[1] ? selected[1] : ""
                                        }
                                    </p>
                                </div>
                                <div className={`${selected[2] ? "selected-ball" : "not-selected-ball"} rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                                    <p className='text-white text-lg font-[500]'>
                                        {
                                            selected[2] ? selected[2] : ""
                                        }
                                    </p>
                                </div>
                                <div className={`${selected[3] ? "selected-ball" : "not-selected-ball"} rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                                    <p className='text-white text-lg font-[500]'>
                                        {
                                            selected[3] ? selected[3] : ""
                                        }
                                    </p>
                                </div>
                                <div className={`${selected[4] ? "selected-ball" : "not-selected-ball"} rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                                    <p className='text-white text-lg font-[500]'>
                                        {
                                            selected[4] ? selected[4] : ""
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className='py-[40px]'>
                                <div className='grid grid-cols-11'>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 1])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                1
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 2])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                2
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 3])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                3
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 4])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                4
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 5])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                5
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 6])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                6
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 7])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                7
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 8])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                8
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 9])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                9
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 10])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                10
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 11])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                11
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 12])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                12
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 13])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                13
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 14])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                14
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 15])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                15
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 16])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                16
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 17])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                17
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 18])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                18
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 19])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                19
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 20])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                20
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 21])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                21
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 22])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                22
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 23])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                23
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 24])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                24
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 25])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                25
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 26])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                26
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 27])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                27
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 28])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                28
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 29])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                29
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 30])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                30
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 31])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                31
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 32])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                32
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 33])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                33
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 34])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                34
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 35])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                35
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 36])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                36
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 37])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                37
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 38])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                38
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 39])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                39
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 40])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                40
                                            </p>
                                        </button>
                                    </div>
                                    <div className='col-span-1 border border-[#192D54]'>
                                        <button onClick={(e) => {
                                            setSelected([...selected, 41])
                                        }} className='ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center'>
                                            <p className='text-white text-lg font-[500]'>
                                                41
                                            </p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='modal-body py-[40px] px-[56px]'>
                            <div className='text-center mb-[80px]'>
                                <h2 className='text-5xl font-bold text-white'>
                                    <span className='text-[32px]'>$</span>149,000,000
                                </h2>
                                <p className='font-light text-[#959EBA] mt-[16px]'>Saturday 9:59</p>
                            </div>

                            <div className='grid grid-cols-2 gap-[16px]'>
                                <div className='col-span-2'>
                                    <button onClick={handleStart} className='play-btn py-[12px] text-white text-xl font-[500] w-full'>
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
                    )
                }
            </div>
        </>
    )
}

export default InitiatePlay