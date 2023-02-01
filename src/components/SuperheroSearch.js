import React, { useState, useEffect } from "react";
import axios from "axios";

function SuperheroSearch() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [supname, setSupname] = useState("hulk");
  // const [selectHero, SetSelectHero] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(
        `https://www.superheroapi.com/api.php/1818758668525480/search/${supname}`
      )
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        setError("Data Not Found");
      });   
  };

  function HandleSearch(e){
    e.preventDefault();
    fetchData();
  }

  function handleSelection(hero){ 
    setSupname(hero.name);
    console.log(hero.name);
    fetchData()
  }
  

  return (
    <div>
      <form onSubmit={HandleSearch}>
        <input type="text" value={supname} onChange={(e) => setSupname(e.target.value)} />
        <button type="submit">search</button>
      </form>

      {data.response === "success" && (
        <ul>
          {data.results.map((hero, index) => (
            <li key={index} onClick={()=>handleSelection(hero)}>{hero.name}</li>
          ))}
        </ul>
      )}

      {data.response ==="success" && (
        <div>
          <h2>{data.results[0].name}</h2>
          <p>{data.results[0].biography['full-name']}</p>
          <p>{data.results[0].biography.publisher}</p>
          <img src={data.results[0].image.url} alt={data.results[0].name} />
        </div>
      )}
    </div>
  );
}

export default SuperheroSearch;
