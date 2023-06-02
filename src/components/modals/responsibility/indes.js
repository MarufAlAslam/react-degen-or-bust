import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const Responsibility = ({ setVisibleResponsibility }) => {
    const handleFaq = () => {
        setVisibleResponsibility(false)
    }


    const faqData = [
        {
            question: "DO I HAVE A Degen or Busting PROBLEM?",
            answer: "Degen or Busting problem includes all behaviour patterns that compromise, disrupt, or damage any personal, family, or vocational pursuits. Symptoms include increasing preoccupation with flipping, a need to flip more and more frequently, restlessness or irritability when attempting to stop, “chasing” losses, and loss of control manifested by continuation of the flipping behaviour in spite of mounting, serious, and/or negative consequence."
        },
    ]
    return (
        <>
            <div onClick={handleFaq} className='modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-transparent'></div>
            <div className='initiate-play modal max-w-[700px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
                <div className='modal-header flex justify-between items-center py-[24px] text-center px-[24px]'>
                <button onClick={handleFaq} className="text-white md:hidden block">
                        <FaArrowLeft/>
                    </button>
                    <h2 className='text-white text-center text-[40px] font-bold w-full'>
                        Degen or Bust reponsibily
                    </h2>
                </div>

                <div className='modal-body md:py-[40px] md:px-[56px] p-[10px] md:h-[75vh] h-[80vh] overflow-y-scroll'>
                    <p className='text-lg text-[#E4E4E4] font-light mb-[30px]'>
                        DOB is a fun game on the Polygon network and we want all of our players to play responsibly. Please only play with MATIC you are comfortable parting with that won’t impact your well-being.
                    </p>
                    <div>
                        <p className='text-xl font-bold text-[#E4E4E4] mb-[10px]'>
                            Resources
                        </p>
                        <table className='text-[#E4E4E4] font-light'>
                            <tbody>
                                <tr>
                                    <td className='pr-[20px]'>
                                        Call
                                    </td>
                                    <td>
                                        <a className='underline' href='tel:1-800-522-4700'>1-800-522-4700</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='pr-[20px]'>
                                        Chat
                                    </td>
                                    <td>
                                        <a className='underline' href='ncpgambling.org/chat'>ncpgambling.org/chat</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='pr-[20px]'>
                                        Text
                                    </td>
                                    <td>
                                        <a className='underline' href='text:1-800-522-4700'>1-800-522-4700</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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

export default Responsibility