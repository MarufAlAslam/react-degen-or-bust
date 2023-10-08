import React from "react";
import BottomCard from "../bottom-card";

const Bottom = () => {
  const data = [
    {
      id: 1,
      title: "NFT distribution",
      values: [
        "Legendary NFTs = 10 (0.1%)",
        "Epic NFTs =",
        "Rare NFTs=",
        "Uncommon NFTs",
        "Common NFTs",
      ],
    },
    {
      id: 2,
      title: "NFT distribution",
      values: [
        "Legendary NFTs = 10 (0.1%)",
        "Epic NFTs =",
        "Rare NFTs=",
        "Uncommon NFTs",
        "Common NFTs",
      ],
    },
    {
      id: 3,
      title: "NFT distribution",
      values: [
        "Legendary NFTs = 10 (0.1%)",
        "Epic NFTs =",
        "Rare NFTs=",
        "Uncommon NFTs",
        "Common NFTs",
      ],
    },
    {
      id: 4,
      title: "NFT distribution",
      values: [
        "Legendary NFTs = 10 (0.1%)",
        "Epic NFTs =",
        "Rare NFTs=",
        "Uncommon NFTs",
        "Common NFTs",
      ],
    },
  ];
  return (
    <div className="bottom new-bottom py-16">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[60px]">
          {data.map((item) => (
            <BottomCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
