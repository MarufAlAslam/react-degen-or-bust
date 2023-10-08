import React from "react";
import left from "../../../assets/images/left.png";
import right from "../../../assets/images/right.png";

const Top = () => {
  return (
    <div className="top new-top py-[70px] h-[60vh] relative">
      <img src={left} className="absolute left-0 bottom-0" alt="" />
      <img src={right} className="absolute right-0 bottom-0" alt="" />
      <div className="text-center">
        <h2 className="text-white text-5xl">Name of the NFT project</h2>
        <form
          action=""
          className="flex flex-col justify-center items-center w-[325px] mx-auto"
        >
          <textarea
            name=""
            id="desc"
            className="my-5 bg-transparent w-full resize-none p-1 mx-auto placeholder:text-white text-center"
            cols="30"
            rows="3"
            placeholder="Enter your description here block"
          ></textarea>

          <button className="btn bg-[#6979F8] py-[14px] text-white font-bold w-full text-2xl">
            Mint Now
          </button>
          <p className="mt-3 text-white text-sm">Mint price: 92 MATIC ($50)</p>
        </form>
      </div>
    </div>
  );
};

export default Top;
