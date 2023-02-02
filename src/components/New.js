import React, { useState, useEffect } from "react";
import axios from "axios";

function SuperheroSearch() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [supname, setSupname] = useState("");
  const [selectedHero, SetSelectedHero] = useState('');
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    if (!selectedHero) {
      setSupname("hulk");
      setShowList(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [supname]);

  const fetchData = () => {
    axios.get(
        `https://www.superheroapi.com/api.php/1818758668525480/search/${supname}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        if (!selectedHero) {
          SetSelectedHero(response.data.results[0]);
        }
        setShowList(true);
      })
      .catch((error) => {
        setError("Data Not Found");
      });
  };

  function handleSelection(hero){
    SetSelectedHero(hero);
    setShowList(false);
  }

  return (
    <div>
      <div>
        <input type="text" value={supname} onChange={(e) => setSupname(e.target.value)} />
      </div>

      { showList && data.response === "success" && (
        <ul>
          {data.results.map((hero, index) => (
            <li key={index} onClick={() => handleSelection(hero)}>{hero.name}</li>
          ))}
        </ul>
      )}

      { selectedHero && (
        <div>
          <h2>{selectedHero.name}</h2>
          <p>{selectedHero.biography['full-name']}</p>
          <p>{selectedHero.biography.publisher}</p>
          <img src={selectedHero.image.url} alt={selectedHero.name} />

          <div>
            <h1>Powerstates:</h1>
            <h3>{selectedHero.powerstats.combat}</h3>
            <h3>{selectedHero.powerstats.durability}</h3>
            <h3>{selectedHero.powerstats.intelligence}</h3>
            <h3>{selectedHero.powerstats.power}</h3>
            <h3>{selectedHero.powerstats.speed}</h3>
            <h3>{selectedHero.powerstats.strength}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuperheroSearch;
