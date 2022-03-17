import React, { useState } from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const Search = () => {
  const [char, setChar] = useState("");
  const [charFiltered, setCharFiltered] = useState([]);

  const handleSearch = () => {
    const filtered = Characters.filter((c) =>
      c.name.toLowerCase().includes(char.toLowerCase())
    );

    setCharFiltered(filtered);
  };

  return (
    <div className="row">
      <div className="col"></div>
      <div className="col-5 text-center">
        <h1 className="display-4 my-3">Search your Character</h1>
        <input
          className="mt-5 form-control w-100"
          type="text"
          placeholder="Personaje"
          onChange={(e) => setChar(e.target.value)}
        />
        <button
          className="btn btn-info form-control mt-3 w-100"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="col"></div>
      <div className="d-flex flex-wrap text-center w-100 justify-content-center">
        <div className="text-center d-flex justify-content-center flex-wrap">
          {charFiltered.map((c) => (
            <Card key={c.id} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
