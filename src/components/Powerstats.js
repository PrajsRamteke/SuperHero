import React from "react";

export default function Powerstats({value}) {
    
  return (
    <div className="Powerstats">
      <div className="miniData">
        <span>INTELLIGENCE</span>
        <span>{value.powerstats.intelligence}</span>
      </div>
      <div className="miniData">
        <span>STRENGTH</span>
        <span>{value.powerstats.strength}</span>
      </div>
      <div className="miniData">
        <span>SPEED</span>
        <span>{value.powerstats.speed}</span>
      </div>
      <div className="miniData">
        <span>DURABILITY</span>
        <span>{value.powerstats.durability}</span>
      </div>
      <div className="miniData">
        <span>POWER</span>
        <span>{value.powerstats.power}</span>
      </div>
      <div className="miniData">
        <span>COMBAT</span>
        <span>{value.powerstats.combat}</span>
      </div>
    </div>
  );
}
