import React from "react";

const Card = ({ id, name, description }) => {
  return (
    <div className="border border-dark border-1 mx-2 my-4">
      <img
        src={`/assets/${id}.png`}
        alt={name}
        className="card"
        loading="lazy"
      />
      <p className="text-dark h1">{name}</p>
      <p className="text-secondary h5">{description}</p>
    </div>
  );
};

export default Card;
