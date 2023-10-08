import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const UseNft = ({ setVisibleUseNft, setVisibleSelectNft }) => {
  const handleNo = () => {
    setVisibleUseNft(false);
  };

  const handleYes = () => {
    setVisibleUseNft(false);
    setVisibleSelectNft(true);
  };

  const ntfData = ["1 x Common NFT", "2 x Rare NFT", "1 x Legendary NFT"];
  return (
    <>
      <div
        onClick={handleNo}
        className="modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-black opacity-50"
      ></div>
      <div className="initiate-play modal max-w-[700px] w-full fixed md:top-[50%] top-0 left-[50%] translate-x-[-50%] md:translate-y-[-50%] z-40">
        <div className="modal-header flex justify-between items-center py-[24px] text-center px-[10px]">
          <button onClick={handleNo} className="text-white md:hidden block">
            <FaArrowLeft />
          </button>
          <h2 className="text-white text-center text-[40px] font-bold w-full">
            Do you want use your NFTs?
          </h2>
        </div>

        <div className="modal-body md:py-[40px] md:px-[56px] p-[10px]">
          <p className="text-white text-lg mb-5">Hi, disgsii.eth!</p>
          <p className="text-white text-lg">You own following NFTs:</p>
          <ul className="list-disc list-inside pl-5 mb-6">
            {ntfData.map((item, index) => (
              <li key={index} className="text-[#E4E4E4] font-light mt-[8px]">
                {item}
              </li>
            ))}
          </ul>

          <p className="text-white text-xl">
            Do you want to use any of these NFTs today?
          </p>

          <div className="mt-[32px] flex md:flex-row flex-col gap-3 justify-between items-center text-center">
            <button
              onClick={handleYes}
              className="btn-gotit flex justify-center items-center rounded-full text-white text-xl mx-auto px-[84px] py-[12px]"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="btn-no flex justify-center items-center rounded-full text-white text-xl mx-auto px-[84px] py-[12px]"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseNft;
