import React from "react";

export default function Connection({ value }) {
  return (
    <div className="Connection">
      <div className="miniCon">
        <div>GROUP AFFILIATION :</div>
        <span>{value.connections["group-affiliation"]}</span>
      </div>

      <div className="miniCon">
        <div>RELATIVES :</div>
        <span>{value.connections.relatives}</span>
      </div>
    </div>
  );
}
