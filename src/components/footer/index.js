import React from 'react'

const Footer = ({setVisibleFaq, setVisibleHowToPlay}) => {
    return (
        <div className='footer pb-[48px]'>
            <div className='custom-container'>
                <div className='flex justify-center items-center text-[#CAD2E5] gap-[10px] text-xl font-normal'>
                    <button onClick={()=>setVisibleFaq(true)}>FAQ</button>
                    <span>•</span>
                    <button onClick={()=>setVisibleHowToPlay(true)}>How to Play</button>
                    <span>•</span>
                    <button>Degen or Bust responsibly</button>
                </div>
            </div>
        </div>
    )
}

export default Footer