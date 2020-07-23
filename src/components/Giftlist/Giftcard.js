import React from "react";

export const  = (props) => {
  const addtobasket = () => {
    console.log("clicked");
  };
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button onClick={addtobasket}>Add Gift</button>
    </div>
  );
};
