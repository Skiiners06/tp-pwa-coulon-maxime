import React, { useState, useContext, useEffect, useReducer } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { MapContext, mapReducer } from "./MapContext";
import Geolocation from './Geolocation'

const MapLeaflet = () => {
  const [state, dispatch] = useReducer(mapReducer, { markers: [] });

  const Click = () => {
    const { state, dispatch } = useContext(MapContext);

    useEffect(() => {
        console.log(state)
    }, [state]);

    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        dispatch({ type: "addMarker", marker: [lat, lng] });

        //* Vibration à chaque ajout de maker (clic sur la carte)
        // enable vibration support
        navigator.vibrate =
          navigator.vibrate ||
          navigator.webkitVibrate ||
          navigator.mozVibrate ||
          navigator.msVibrate;

        if (navigator.vibrate) {
          // vibration API supported
          navigator.vibrate(300);
        }
      },
    });

    return <></>;
  };

  //Todo déployer sur heroku pour la geolocalisation

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={7}
        scrollWheelZoom={false}
        style={{
          width: 700,
          height: 500,
        }}
      >
        <Click />
        <Geolocation />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Ajoute un marker à chaque clic en parcourrant la liste des markers */}
        {state.markers.map((position, idx) => (
          <Marker key={`marker-${idx}`} position={position}></Marker>
        ))}
      </MapContainer>
    </MapContext.Provider>
  );
};

export default MapLeaflet;
