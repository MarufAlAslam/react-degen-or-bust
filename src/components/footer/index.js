import React from "react";
import twitter from "../../assets/images/twitter.svg";
import discord from "../../assets/images/discord.svg";

const Footer = ({
  setVisibleFaq,
  setVisibleHowToPlay,
  setVisibleResponsibility,
}) => {
  return (
    <div className="footer pb-[48px]">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <div className="md:flex hidden justify-start items-center gap-4">
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://discord.com/">
              <img src={discord} alt="discord" />
            </a>
          </div>
          <div className="flex justify-center items-center md:w-auto w-full">
            <div className="flex justify-center items-center text-[#CAD2E5] gap-[10px] text-xl font-normal">
              <button onClick={() => setVisibleFaq(true)}>FAQ</button>
              <span>•</span>
              <button onClick={() => setVisibleHowToPlay(true)}>
                How to Play
              </button>
              <span>•</span>
              <button onClick={() => setVisibleResponsibility(true)}>
                Degen or Bust responsibly
              </button>
            </div>
          </div>
          <div className="md:flex hidden justify-start items-center gap-4 opacity-0">
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://discord.com/">
              <img src={discord} alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
