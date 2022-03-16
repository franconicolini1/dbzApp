import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const Men = () => {
  const characters = Characters.filter((c) => c.type === "m");

  return (
    <div className="d-flex justify-content-around flex-wrap text-center">
      <h1 className="text-dark display-1 w-100 my-2">Men from DBZ</h1>
      {characters.map((c) => (
          <Card key={c.id} {...c} />
        ))}
    </div>
  );
};

export default Men;
