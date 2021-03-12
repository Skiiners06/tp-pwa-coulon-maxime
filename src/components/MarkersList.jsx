import React, { useContext, useReducer, useEffect } from "react";
import { MapContext, mapReducer } from "./MapContext";

const MarkerList = () => {
  const { state, dispatch } = useContext(MapContext);

  console.log('test')
  console.log(state);
  console.log(dispatch);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Liste des markers</h1>

        <div onLoad={() => {dispatch({type:'addMarker'})}}></div>
    </div>
  );
};

export default MarkerList;
