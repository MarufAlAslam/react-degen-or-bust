import React from "react";
import left from "../../../assets/images/left.png";
import right from "../../../assets/images/right.png";
import UseNft from "../../modals/useNfts";
import SelectNft from "../../modals/select-nft";
import NewInitiatePlay from "../../modals/play-modals/new-initiate-play";

const Top = () => {
  const [visibleUseNft, setVisibleUseNft] = React.useState(false);
  const [visibleSelectNft, setVisibleSelectNft] = React.useState(false);
  const [visibleInitiatePlay, setVisibleInitiatePlay] = React.useState(false);

  const handleMint = (e) => {
    e.preventDefault();
    setVisibleUseNft(true);
  };
  return (
    <div className="top new-top py-[70px] h-[60vh] relative">
      {/* modals */}
      {visibleUseNft && (
        <UseNft
          setVisibleUseNft={setVisibleUseNft}
          setVisibleSelectNft={setVisibleSelectNft}
        />
      )}
      {visibleSelectNft && (
        <SelectNft
          setVisibleSelectNft={setVisibleSelectNft}
          setVisibleInitiatePlay={setVisibleInitiatePlay}
        />
      )}
      {visibleInitiatePlay && (
        <NewInitiatePlay setVisiblePlay={setVisibleInitiatePlay} />
      )}
      {/* modals */}

      <img src={left} className="absolute left-0 bottom-0" alt="" />
      <img src={right} className="absolute right-0 bottom-0" alt="" />
      <div className="text-center">
        <h2 className="text-white text-5xl">Name of the NFT project</h2>
        <form
          onSubmit={handleMint}
          action=""
          className="flex flex-col justify-center items-center w-[325px] mx-auto"
        >
          <textarea
            name=""
            id="desc"
            className="my-5 text-white bg-transparent w-full resize-none p-1 mx-auto placeholder:text-white text-center"
            cols="30"
            rows="3"
            placeholder="Enter your description here block"
          ></textarea>

          <button
            type="submit"
            className="btn mint-btn-new bg-[#6979F8] hover:bg-black  py-[14px] text-white font-bold w-full text-2xl"
          >
            Mint Now
          </button>
          <p className="mt-3 text-white text-sm">Mint price: 92 MATIC ($50)</p>
        </form>
      </div>
    </div>
  );
};

export default Top;
