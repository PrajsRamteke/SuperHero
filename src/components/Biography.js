import React from "react";

export default function Biography({ value }) {
  return (
    <div className="Biography">
      <div className="miniData">
        <span>FULL NAME</span>
        <span>{value.biography["full-name"]}</span>
      </div>
      <div className="miniData">
        <span>ALTER EGOS</span>
        <span>{value.biography["alter-egos"]}</span>
      </div>
      <div className="miniData">
        <span>PLACE OF BIRTH</span>
        <span>{value.biography["place-of-birth"]}</span>
      </div>
      <div className="miniData">
        <span>FIRST APPEARANCE</span>
        <span>{value.biography["first-appearance"]}</span>
      </div>
      <div className="miniData">
        <span>PUBLISHER</span>
        <span>{value.biography.publisher}</span>
      </div>
      <div className="miniData">
        <span>ALIGNMENT</span>
        <span>{value.biography.alignment}</span>
      </div>
    </div>
  );
}
