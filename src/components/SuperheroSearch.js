import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import Powerstats from "./Powerstats";
import Appearance from "./Appearance";
import Biography from "./Biography";
import Connection from "./Connection";

function SuperheroSearch() {
  const [data, setData] = useState({});
  const [supname, setSupname] = useState("");
  const [selectedHero, SetSelectedHero] = useState("");
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    if (!selectedHero) {
      setSupname("Red Hulk");
      // setShowList(false); //error it showing true
    }
  });

  useEffect(() => {
    fetchData();
  }, [supname]);

  const fetchData = () => {
    axios
      .get(
        `https://www.superheroapi.com/api.php/1818758668525480/search/${supname}`
      )
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
        if (!selectedHero) {
          SetSelectedHero(response.data.results[0]); //only run first time
          // console.log(response.data.results[0]);
        }
        if (supname === "Red Hulk") {
          setShowList(false); //only run first time
        } else {
          setShowList(true);
        }
      })
      .catch((error) => {
        // console.log("Data Not Found(catch error)");
      });
  };

  function handleSelection(hero) {
    SetSelectedHero(hero);
    // console.log(hero);
    setShowList(false);
  }

  return (
    <div className="back">
      <div className="fullPage">
        <div className="nav">
          <h3 className="SuperText">
            Super<span>Hero.</span>
          </h3>
          <div className="inputType">
            <input
              type="text"
              value={supname}
              onChange={(e) => setSupname(e.target.value)}
            />
          </div>
        </div>

        {showList && data.response === "success" && (
          <ul className="listData">
            {data.results.map((hero, index) => (
              <li
                className="list"
                key={index}
                onClick={() => handleSelection(hero)}
              >
                <img src={hero.image.url} alt={hero.name} />
                <span>{hero.name}</span>
              </li>
            ))}
          </ul>
        )}

        {selectedHero && (
          <div className="bodyData">
            <div className="img-container">
              <img src={selectedHero.image.url} alt={selectedHero.name} />
            </div>

            <div className="RightData">
              <h2>{selectedHero.name}</h2>

              <div className="dataHeadings">
                <Link className="NamLink active" to={`/`}>
                  POWERSTATS
                </Link>
                <Link className="NamLink" to={`/biography`}>
                  BIOGRAPHY
                </Link>
                <Link className="NamLink" to={`/appearance`}>
                  APPEARANCE
                </Link>
                <Link className="NamLink" to={`/connection`}>
                  CONNECTION
                </Link>
              </div>

              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Powerstats value={selectedHero} />}
                />
                <Route
                  exact
                  path="/biography"
                  element={<Biography value={selectedHero} />}
                />
                <Route
                  exact
                  path="/appearance"
                  element={<Appearance value={selectedHero} />}
                />
                <Route
                  exact
                  path="/connection"
                  element={<Connection value={selectedHero} />}
                />
              </Routes>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuperheroSearch;
