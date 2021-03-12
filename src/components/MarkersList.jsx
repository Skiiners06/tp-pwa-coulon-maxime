import React, { useContext, useReducer, useEffect } from "react";
import { MapContext, mapReducer } from "./MapContext";

const MarkerList = () => {
  const { state, dispatch } = useContext(MapContext);

  console.log(state);
  //window.onload = useEffect(() => {}, [state]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Liste des markers</h1>
    </div>
  );
};

export default MarkerList;
