import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // pengganti fetch

const Digimon = () => {
  const [digimons, setDigimons] = useState([]);

  useEffect(() => {
    const getDataDigimon = async () => {
      // axios
      const result = await axios.get(
        "https://digimon-api.vercel.app/api/digimon"
      );
      // console.log(result.data);
      setDigimons(result.data);
      // fetch
      // const responseFetch = await fetch("https://digimon-api.vercel.app/api/digimon")
      // const resultFetch = await responseFetch.json()
      // console.log(resultFetch);
    };
    console.log("useEffect");
    getDataDigimon();
  }, []);

  return (
    <div>
      {console.log("return")}
      <h1>Digimon</h1>

      {digimons.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        digimons.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" width={200} />
            <span>{item.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Digimon;
