import React from 'react'

import { FiArrowUpRight } from 'react-icons/fi'

const FaqModal = ({ setVisibleFaq }) => {
    const handleFaq = () => {
        setVisibleFaq(false)
    }


    const faqData = [
        {
            question: "What is Degen or Bust (DOB)?",
            answer: "Degen of Bust is a smart contract that allows users to pay $1 for their chance at winning the current prize pool amount for the day."
        },
        {
            question: "How do I know I can Trust DOB?",
            answer: "All transactions are tracked on chain and can be audited by anyone."
        },
        {
            question: "Where can I learn more?",
            answer: "Join us on discord, there will always be someone to help you out."
        }
    ]
    return (
        <>
            <div onClick={handleFaq} className='modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-transparent'></div>
            <div className='initiate-play max-w-[700px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
                <div className='modal-header flex justify-between items-center py-[24px] text-center px-[24px]'>
                    <h2 className='text-white text-center text-[40px] font-bold w-full'>
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className='modal-body py-[40px] px-[56px]'>
                    <a href='/' className='text-[#6F97F4] text-xl mb-[24px] flex justify-start items-center'>
                        TOKENOMICS <FiArrowUpRight className='ml-[4px]' />
                    </a>

                    <div>
                        {
                            faqData.map((item, index) => (
                                <>
                                    <p className='text-xl font-bold text-white mt-[32px]'>
                                        {item.question}
                                    </p>
                                    <p className='text-[#E4E4E4] font-light mt-[8px]'>
                                        {item.answer}
                                    </p>
                                </>
                            ))
                        }
                    </div>

                    <div className='mt-[32px] text-center'>
                        <button onClick={handleFaq} className='btn-gotit flex justify-center items-center rounded-full text-white text-xl mx-auto px-[84px] py-[12px]'>
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FaqModal