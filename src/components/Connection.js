import React from "react";

export default function Connection({ value }) {
  return (
    <div className="Connection">
      <div className="miniData">
        <span>GROUP AFFILIATION:</span>
        <span>{value.connections["group-affiliation"]}</span>
      </div>

      <div className="miniData">
        <span>RELATIVES:</span>
        <span>{value.connections.relatives}</span>
      </div>
    </div>
  );
}
