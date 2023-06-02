import React from 'react'
import ticket from '../../../assets/images/ticket.png'

const PastWinners = () => {
    const pastData = [
        {
            id: 1,
            name: "neonsalami.eth",
            time: "4 hrs ago",
            amount: 3,
            won: 0.0009,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "4 hrs ago",
            amount: 2,
            won: 1.5,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "4 hrs ago",
            amount: 2,
            won: 1.5,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "4 hrs ago",
            amount: 2,
            won: 1.5,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "4 hrs ago",
            amount: 2,
            won: 1.5,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "4 hrs ago",
            amount: 2,
            won: 1.5,
        },
    ]
    return (
        <div className='past-winners max-w-[100%] w-[825px] px-[24px] pt-[40px] pb-[16px] fixed top-[90px] z-20 left-[50%] translate-x-[-50%]'>
            {
                pastData.map((item, index) => (
                    <div key={index} className='flex justify-between items-center mb-[24px]'>
                        <div className='flex justify-start items-center'>
                            <img src={ticket} alt='ticket' className='mr-[8px]' />
                            <p className='text-[#4F5875] text-xl'>
                                <span className='text-[#6F97F4] font-semibold'>
                                    {item.name}
                                </span> bought <span className='text-[#fff] font-semibold'>{item.amount} tickets</span> and won <span className='text-[#fff] font-semibold'>{item.won} ETH</span>
                            </p>
                        </div>
                        <p className='text-[#7D19E0]'>
                            {item.time}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default PastWinners