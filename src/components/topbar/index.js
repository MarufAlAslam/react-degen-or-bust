import React from "react";
import logo from "../../assets/images/logo.svg";
import mic from "../../assets/images/mic.svg";
import user from "../../assets/images/user.png";

import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import { FaAngleDown, FaAngleUp, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const TopBar = ({
  setVisiblePastWinners,
  visiblePastWinners,
  setVisibleFaq,
  setVisibleHowToPlay,
  setVisibleResponsibility,
}) => {
  const [muted, setMuted] = React.useState(false);
  const [walletConnected, setWalletConnected] = React.useState(false);
  const handlePastWinners = () => {
    setVisiblePastWinners(!visiblePastWinners);
    handleMobileMenu();
  };

  const handleFaq = () => {
    setVisibleFaq(true);
    handleMobileMenu();
  };

  const handleHowToPlay = () => {
    setVisibleHowToPlay(true);
    handleMobileMenu();
  };

  const handleResponsibility = () => {
    setVisibleResponsibility(true);
    handleMobileMenu();
  };

  // mobile menu toggler
  const handleMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".menu-overlay");
    menu.classList.toggle("translate-x-[100%]");
    overlay.classList.toggle("translate-x-[-100%]");
  };
  return (
    <div className="top-bar bg-[#11172b80] fixed top-0 left-0 w-full z-30 py-[24px]">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" />
          <div className="md:flex hidden justify-center items-center">
            <button
              onClick={handlePastWinners}
              className="btn-blue flex justify-center items-center rounded-full border-none overflow-hidden"
            >
              Past Winner
              {visiblePastWinners ? (
                <FaAngleUp className="ml-[8px]" />
              ) : (
                <FaAngleDown className="ml-[8px]" />
              )}
            </button>
            <button className="btn-red flex justify-center items-center rounded-full ml-[16px]">
              Live
            </button>
          </div>
          <div className="md:flex hidden justify-center items-center">
            {walletConnected ? (
              <>
                <form>
                  <div className="flex search-holder relative">
                    <img
                      src={user}
                      className="user-img absolute left-0 z-10 top-[50%]"
                      alt="user"
                    />
                    <select className="user-select bg-[#18213E] py-[8px] text-[#5078EE] pl-[45px] pr-[36px] rounded-full">
                      <option>neonsalami.eth</option>
                    </select>
                  </div>
                </form>
                <button className="ml-[16px]">
                  <img src={mic} alt="mic" />
                </button>
              </>
            ) : (
              <button
                className="connect-btn flex justify-center items-center rounded-full"
                onClick={() => setWalletConnected(true)}
              >
                Connect Wallet
              </button>
            )}
          </div>

          <button onClick={handleMobileMenu} className="md:hidden block">
            <FaBars className="text-white text-xl" />
          </button>

          <div className="md:hidden block absolute">
            <div
              onClick={handleMobileMenu}
              className="menu-overlay translate-x-[-100%] h-screen w-full fixed top-0 left-0 z-20 bg-[#00000080]"
            ></div>

            <div className="mobile-menu translate-x-[100%] w-[75%] h-screen fixed top-0 right-0 bg-[#192D54] flex flex-col justify-between items-center py-[24px] px-[16px] z-30">
              <div className="w-full">
                <div className="flex mb-[65px] justify-between items-center w-full">
                  <button className="text-white text-xl">
                    {muted ? (
                      <HiSpeakerXMark onClick={() => setMuted(!muted)} />
                    ) : (
                      <HiSpeakerWave onClick={() => setMuted(!muted)} />
                    )}
                  </button>
                  <button
                    onClick={handleMobileMenu}
                    className="text-white text-xl"
                  >
                    <IoClose />
                  </button>
                </div>

                <div className="text-center w-full">
                  {walletConnected ? (
                    <div className="flex justify-center items-center gap-3">
                      <form>
                        <div className="flex search-holder relative">
                          <img
                            src={user}
                            className="user-img absolute left-0 z-10 top-[50%]"
                            alt="user"
                          />
                          <select className="user-select bg-[#18213E] py-[8px] text-[#5078EE] pl-[45px] pr-[36px] rounded-full">
                            <option>neonsalami.eth</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <button className="btn-blue flex justify-center items-center rounded-full mb-[16px] mx-auto" onClick={()=>setWalletConnected(true)}>
                      Connect Wallet
                    </button>
                  )}

                  <div className="bg-[#435e92] h-[1px] w-full mb-[16px] mt-[32px]"></div>
                  <button onClick={handlePastWinners} className="text-white">
                    Past Winners
                  </button>
                  <div className="bg-[#435e92] h-[1px] w-full my-[16px] "></div>
                  <button className="text-white">Live</button>
                  <div className="bg-[#435e92] h-[1px] w-full my-[16px] "></div>
                  <button className="text-white" onClick={handleFaq}>
                    FAQ
                  </button>
                  <div className="bg-[#435e92] h-[1px] w-full my-[16px] "></div>
                  <button className="text-white" onClick={handleResponsibility}>
                    Degen or Bust responsibly
                  </button>
                  <div className="bg-[#435e92] h-[1px] w-full my-[16px] "></div>
                  <button className="text-white" onClick={handleHowToPlay}>
                    How to play
                  </button>
                  <div className="bg-[#435e92] h-[1px] w-full my-[16px] "></div>
                </div>
              </div>
              <div className="flex gap-[16px] justify-center items-center">
                <a href="/">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="/">
                  <img src={discord} alt="discord" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
