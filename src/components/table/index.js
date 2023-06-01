import React from 'react'
import ticket from '../../assets/images/ticket.png'

const Table = () => {
    const tableData = [
        {
            id: 1,
            name: "neonsalami.eth",
            time: "12 sec ago",
            tickets: 3,
        },
        {
            id: 2,
            name: "seskymama.eth",
            time: "2 mins ago",
            tickets: 18,
        },
        {
            id: 3,
            name: "hardertofind.eth",
            time: "3 hours ago",
            tickets: 42,
        },
        {
            id: 4,
            name: "nigarika.eth",
            time: "5 days ago",
            tickets: 80,
        },
        {
            id: 5,
            name: "vitalik.eth",
            time: "1 month ago",
            tickets: 150,
        },
        {
            id: 6,
            name: "neonsalami.eth",
            time: "4 months ago",
            tickets: 300,
        },
    ]
    return (
        <div className='py-[50px] tablee'>
            <div className='custom-container'>


                <div className='custom-table max-w-[800px] w-full mx-auto'>
                    <p className='text-2xl text-[#848DAA] font-bold mb-[32px] '>
                        Recent entries
                    </p>
                    {
                        tableData.map((item, index) => (
                            <div key={index} className='custom-table-bg flex justify-between items-center mb-[24px]'>
                                <p className='text-white text-xl w-1/3'>
                                    {item.name}
                                </p>
                                <p className='text-white w-1/3 text-center'>
                                    {item.time}
                                </p>
                                <div className='flex justify-end items-center w-1/3'>
                                    <img src={ticket} alt='ticket' className='mr-2' />
                                    <p className='text-xl text-white'>
                                        {item.tickets} tickets
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Table