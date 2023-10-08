import React from "react";

const BottomCard = ({ item }) => {
  return (
    <div className="card bottom-card">
      <div className="card-header">
        <h2 className="text-white font-bold text-2xl">{item.title}</h2>
      </div>
      <div className="card-body">
        {item.values.map((value) => (
          <p className="text-white text-sm">{value}</p>
        ))}
      </div>
    </div>
  );
};

export default BottomCard;
