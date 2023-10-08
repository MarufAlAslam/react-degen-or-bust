import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SelectNft = ({ setVisibleSelectNft, setVisibleInitiatePlay }) => {
  const handleModal = () => {
    setVisibleSelectNft(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setVisibleSelectNft(false);
    setVisibleInitiatePlay(true);
  };

  const ntfData = [
    "Common NFT (1 free ticket)",
    "Uncommon NFT (2 free tickets)",
    "Rare NFT (3 free tickets)",
    "Epic NFT (4 free tickets)",
    "Legendary NFT (5 free tickets)",
  ];
  return (
    <>
      <div
        onClick={handleModal}
        className="modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-black opacity-50"
      ></div>
      <div className="initiate-play modal max-w-[700px] w-full fixed md:top-[50%] top-0 left-[50%] translate-x-[-50%] md:translate-y-[-50%] z-40">
        <div className="modal-header flex justify-between items-center py-[24px] text-center px-[10px]">
          <button onClick={handleModal} className="text-white md:hidden block">
            <FaArrowLeft />
          </button>
          <h2 className="text-white text-center text-[40px] font-bold w-full">
            Select the NFT you want to use
          </h2>
        </div>

        <div className="modal-body md:py-[40px] md:px-[56px] p-[10px]">
          <form
            onSubmit={handleFormSubmit}
            action=""
            className="select-nft-form"
          >
            <p className="text-lg text-white mb-[45px]">
              Which NFT do you want to use today?
            </p>
            {ntfData.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center text-white text-xl mt-[32px] gap-2"
              >
                <input
                  type="radio"
                  name="nft"
                  required
                  id={`nft-${index}`}
                  className="w-[20px] h-[20px] border-[2px] border-white rounded-full bg-black"
                />
                <div className="custom-radio"></div>
                <label htmlFor={`nft-${index}`}>{item}</label>
              </div>
            ))}
            <div className="mt-[94px] flex justify-center items-center text-center">
              <button
                type="submit"
                className="btn-no flex justify-center items-center rounded-full text-white text-xl mx-auto px-[84px] py-[12px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SelectNft;
