import React, { useEffect } from "react";
import powerball from "../../../../assets/images/powerball.svg";

import { FiArrowLeft } from "react-icons/fi";
import { RxShuffle } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa";

const NewInitiatePlay = ({ setVisiblePlay }) => {
  const [start, setStart] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const preSelected = [8, 12, 54, 31, 18];
  const hideModal = () => {
    setVisiblePlay(false);
  };

  const handleStart = () => {
    setStart(!start);
    setSelected([]);
  };
  const handleShuffle = () => {
    setSelected([]);
  };

  useEffect(() => {
    if (selected.length === 5) {
      setStart(true);
    }
  }, [selected]);

  const gameData = [
    {
      id: 1,
      title: "1 Play",
      price: "$2",
    },
    {
      id: 2,
      title: "2 Play",
      price: "$4",
    },
    {
      id: 3,
      title: "3 Play",
      price: "$6",
    },
    {
      id: 4,
      title: "4 Play",
      price: "$8",
    },
    {
      id: 5,
      title: "5 Play",
      price: "$10",
    },
    {
      id: 6,
      title: "6 Play",
      price: "$12",
    },
    {
      id: 7,
      title: "7 Play",
      price: "$14",
    },
    {
      id: 8,
      title: "8 Play",
      price: "$16",
    },
  ];

  return (
    <>
      <div
        onClick={hideModal}
        className="modal-overlay fixed w-full h-screen top-0 left-0 z-20 bg-black opacity-50"
      ></div>
      {start ? (
        <div className="initiate-play modal max-w-[700px] w-full fixed md:top-[50%] top-0 left-[50%] translate-x-[-50%] md:translate-y-[-50%] z-40">
          <div className="modal-header flex justify-between items-center py-[24px] text-center px-[10px]">
            <button onClick={handleStart} className="text-white">
              <FaArrowLeft />
            </button>
            <h2 className="text-white text-center text-[40px] font-bold w-full">
              Multi Quick Pick
            </h2>
          </div>

          <div className="modal-body">
            {gameData.map((item) => (
              <a
                id={item.id}
                href="/"
                className="flex justify-between items-center py-[16px] px-[50px] border-b border-t border-[#192D54] text-white"
              >
                <span>{item.title}</span>
                <span>{item.price}</span>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="initiate-play md:pb-0 pb-4 max-w-[700px] w-full fixed md:top-[50%] top-[100%] left-[50%] translate-x-[-50%] md:translate-y-[-50%] translate-y-[-100%] z-40">
          <div className="modal-header flex justify-between items-center py-[24px] text-center px-[24px]">
            <button onClick={handleStart}>
              <FiArrowLeft className="text-white text-xl" />
            </button>
            <img
              src={powerball}
              alt="powerball"
              className="mx-auto md:w-auto w-1/2"
            />
            <button onClick={handleShuffle}>
              <RxShuffle className="text-white text-xl" />
            </button>
          </div>
          <div className="modal-body md:py-[40px] md:px-[56px] p-[10px]">
            <div className="numb">
              <div className="text-center mb-2">
                <p className="text-white text-2xl">Select numbers</p>
              </div>
              <div className="flex justify-center items-center gap-[16px]">
                <div
                  className={`${
                    selected[0] ? "selected-ball" : "not-selected-ball"
                  } rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                >
                  <p className="text-white text-lg font-[500]">
                    {selected[0] ? selected[0] : ""}
                  </p>
                </div>
                <div
                  className={`${
                    selected[1] ? "selected-ball" : "not-selected-ball"
                  } rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                >
                  <p className="text-white text-lg font-[500]">
                    {selected[1] ? selected[1] : ""}
                  </p>
                </div>
                <div
                  className={`${
                    selected[2] ? "selected-ball" : "not-selected-ball"
                  } rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                >
                  <p className="text-white text-lg font-[500]">
                    {selected[2] ? selected[2] : ""}
                  </p>
                </div>
                <div
                  className={`${
                    selected[3] ? "selected-ball" : "not-selected-ball"
                  } rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                >
                  <p className="text-white text-lg font-[500]">
                    {selected[3] ? selected[3] : ""}
                  </p>
                </div>
                <div
                  className={`${
                    selected[4] ? "selected-ball" : "not-selected-ball"
                  } rounded-full w-[40px] h-[40px] flex justify-center items-center`}
                >
                  <p className="text-white text-lg font-[500]">
                    {selected[4] ? selected[4] : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="numb mt-8">
              <div className="text-center mb-2">
                <p className="text-[#909090] text-2xl">
                  Your FREE entries (pre-selected)
                </p>
              </div>
              <div className="grid grid-cols-5 w-[260px] mx-auto gap-[16px]">
                {preSelected.map((item, index) => (
                  <div
                    key={index}
                    className="selected-ball rounded-full w-[40px] h-[40px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-[40px]">
              <div className="grid md:grid-cols-10 grid-cols-5">
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 1]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">1</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 2]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">2</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 3]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">3</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 4]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">4</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 5]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">5</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 6]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">6</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 7]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">7</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 8]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">8</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 9]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">9</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 10]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">10</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 11]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">11</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 12]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">12</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 13]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">13</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 14]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">14</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 15]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">15</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 16]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">16</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 17]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">17</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 18]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">18</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 19]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">19</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 20]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">20</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 21]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">21</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 22]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">22</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 23]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">23</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 24]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">24</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 25]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">25</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 26]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">26</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 27]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">27</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 28]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">28</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 29]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">29</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 30]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">30</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 31]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">31</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 32]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">32</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 33]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">33</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 34]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">34</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 35]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">35</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 36]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">36</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 37]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">37</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 38]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">38</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 39]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">39</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 40]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">40</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 41]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">41</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 43]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">43</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 44]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">44</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 45]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">45</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 46]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">46</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 47]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">47</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 48]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">48</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 49]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">49</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 50]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">50</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 51]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">51</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 52]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">52</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 53]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">53</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 54]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">54</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 55]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">55</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 56]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">56</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 57]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">57</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 58]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">58</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 59]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">59</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 60]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">60</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 61]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">61</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 61]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">61</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 62]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">62</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 63]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">63</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 64]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">64</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 65]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">65</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 66]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">66</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 67]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">67</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 68]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">68</p>
                  </button>
                </div>
                <div className="col-span-1 border border-[#192D54]">
                  <button
                    onClick={(e) => {
                      setSelected([...selected, 69]);
                    }}
                    className="ball-btn disabled text-center w-full rounded-full h-[56px] flex justify-center items-center"
                  >
                    <p className="text-white text-lg font-[500]">69</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewInitiatePlay;
