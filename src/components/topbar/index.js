import React from 'react'
import logo from '../../assets/images/logo.svg'
import mic from '../../assets/images/mic.svg'
import user from '../../assets/images/user.png'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const TopBar = ({setVisiblePastWinners, visiblePastWinners}) => {
    const handlePastWinners = () => {
        setVisiblePastWinners(!visiblePastWinners)
    }
    return (
        <div className='top-bar bg-[#11172b80] fixed top-0 left-0 w-full z-10 py-[24px]'>
            <div className='custom-container'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt='logo' />
                    <div className='flex justify-center items-center'>
                        <button onClick={handlePastWinners} className='btn-blue flex justify-center items-center rounded-full'>Past Winner 
                        {
                            visiblePastWinners ? <FaAngleUp className='ml-[8px]' /> : <FaAngleDown className='ml-[8px]' />
                        }
                        </button>
                        <button className='btn-red flex justify-center items-center rounded-full ml-[16px]'>
                            Live
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <form>
                            <div className='flex search-holder relative'>
                                <img src={user} className="user-img absolute left-0 z-10 top-[50%]" alt='user' />
                                <select className='user-select bg-[#18213E] py-[8px] text-[#5078EE] pl-[45px] pr-[36px] rounded-full'>
                                    <option>neonsalami.eth</option>
                                </select>
                            </div>
                        </form>
                        <button className='ml-[16px]'>
                            <img src={mic} alt='mic' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar