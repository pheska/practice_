import React from "react";

function ParksCard({ parkName }) {
    console.log("Parks Card", parkName)
    return (
        <>
          <h1>{parkName}</h1>
        </>
    )
  }

export default ParksCard;