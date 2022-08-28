import React, { useState, useEffect } from "react";
import axios from "axios";
const GetPlanets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    /*Promise.all (
      item.products.map(async (product) => {
        const response = await fetch(
          `https://swapi.dev/api/planets/`
        );
        const data = await response.json();
        return {
          planets,
          name: data[0].name
        };
      })
    ).then((planets) => setPlanets(planets));
  }, [name]);
    ); //:mike::for further debudding */

    fetchPlanets();
  }, []);
  //const fetchPlanets = async () => {
  const fetchPlanets = () => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => {
        console.log(res);
        setPlanets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Get Planets</h1>
      <div className="item-container">
        {planets.map((planets) => (
          <div className="card" key={planets.id}>
            <h1>{planets.name}</h1>
            <p className="planetname">Planet's Name: {planets.name}</p>
            <p className="films">Included on Films: {planets.films}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetPlanets;
