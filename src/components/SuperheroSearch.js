import React, { useState, useEffect } from "react";
import axios from "axios";

function SuperheroSearch() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [supname, setSupname] = useState("");
  const [selectedHero, SetSelectedHero] = useState('');
  const [showList, setShowList] = useState(true);

  useEffect(() => {
   if(!selectedHero){
      setSupname("Red Hulk");
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
        // console.log(response.data);
        if(!selectedHero){
          SetSelectedHero(response.data.results[0]);
          // console.log(response.data.results[0]);
        } 
        setShowList(true);
      })
      .catch((error) => {
        setError("Data Not Found");
      });   
  };

  function handleSelection(hero){ 
    SetSelectedHero(hero);
    // console.log(hero);
    setShowList(false);
  }
  
  return (
    <div className="back">
    <div className="fullPage">
      <div className="nav">
          <h3 className="Super">Super<span style={{color:"red"}}>Hero</span></h3>
          <div className="inputType">
           <input type="text" value={supname} onChange={(e) => setSupname(e.target.value)} />  
          </div>
      </div>

      { showList && data.response ==="success"  &&(
        <ul className="listData">
          {data.results.map((hero, index) => (
            <li className="list" key={index} onClick={()=>handleSelection(hero)}>
              <img src={hero.image.url} alt={hero.name} />
              <span>{hero.name}</span>
              </li>
            ))}
        </ul>
      )}

      { selectedHero && (
        <div className='bodyData'>
          <div className="img-container">
            <img src={selectedHero.image.url} alt={selectedHero.name} />
          </div>
 
          <div className='RightData'>
          <h2>{selectedHero.name}</h2>
            <div className='dataHeadings'>
              <h3>POWERSTATS</h3>
              <h3>BIOGRAPHY</h3>
              <h3>APPEARANCE</h3>
              <h3>CONNECTION</h3>
            </div>

              <div className="Powerstats">
                <div className='miniData'>
                  <span>INTELLIGENCE</span>
                  <span>{selectedHero.powerstats.intelligence}</span>
                </div>
                <div className='miniData'>
                  <span>STRENGTH</span>
                  <span>{selectedHero.powerstats.strength}</span>
                </div>
                <div className='miniData'>
                  <span>SPEED</span>
                  <span>{selectedHero.powerstats.speed}</span>
                </div>
                <div className='miniData'>
                  <span>DURABILITY</span>
                  <span>{selectedHero.powerstats.durability}</span>
                </div>
                <div className='miniData'>
                  <span>POWER</span>
                  <span>{selectedHero.powerstats.power}</span>
                </div>
                <div className='miniData'>
                  <span>COMBAT</span>
                  <span>{selectedHero.powerstats.combat}</span>
                </div>
              </div>
          </div>

        </div>
      )}
    </div>
    </div>
  );
}

export default SuperheroSearch;
