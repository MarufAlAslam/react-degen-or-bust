import React from 'react'

const HowToPlay = ({ setVisibleHowToPlay }) => {
    const handleFaq = () => {
        setVisibleHowToPlay(false)
    }

    const list = [
        "Connect your MetaMask Wallet. (Get MetaMask @ https://metamask.io/)",
        "Ensure you have MATIC in your wallet.",
        "Click on Play now and select how many tickets you’re buying.",
        "Select your 5 numbers ranging from 1-41",
        "Enter and confirm the transaction",
        "Check the Live tab to see if you won!"
    ]


    const faqData = [
        {
            question: "What is a MetaMask Wallet?",
            answer: <p className='text-[#E4E4E4] font-light mt-[8px]'>MetaMask wallet is a browser extension to manage your digital assets on the Ethereum blockchain network. Visit <a className='underline' href='https://metamask.io/'>https://metamask.io/</a>, add the wallet to chrome, and follow the instructions to create a wallet.</p>
        },
        {
            question: "How Do I fund my MetaMask Wallet?",
            
            answer: <p className='text-[#E4E4E4] font-light mt-[8px]'>Use a central exchange such as Coinbase or Binance to fund your wallet. Purchase Ethereum using fiat currency. Then withdraw Ethereum to your MetaMask wallet. Next you’ll need to use a bridge to get the funds over to Polygon network. Go to <a className='underline' href='https://wallet.polygon.technology/'>https://wallet.polygon.technology/</a> to do this.</p>
        },
    ]
    return (
        <>
            <div onClick={handleFaq} className='modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-transparent'></div>
            <div className='initiate-play max-w-[700px] w-full fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-40'>
                <div className='modal-header flex justify-between items-center py-[24px] text-center px-[24px]'>
                    <h2 className='text-white text-center text-[40px] font-bold w-full'>
                    How to play
                    </h2>
                </div>

                <div className='modal-body py-[40px] px-[56px] h-[75vh] overflow-y-scroll'>
                   
                    <div>
                        {
                            list.map((item, index) => (
                                <div className='flex justify-start items-start'>
                                    <span className='block text-[#E4E4E4] text-lg'>{index + 1}. </span>
                                    <p className='text-lg text-[#E4E4E4] ml-[8px] font-light'>  
                                        {item}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        {
                            faqData.map((item, index) => (
                                <>
                                    <p className='text-xl font-bold text-white mt-[32px]'>
                                        {item.question}
                                    </p>
                                    {item.answer}
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

export default HowToPlay