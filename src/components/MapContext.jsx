import React from 'react';
import MapLeaflet from './MapLeaflet';

const MapContext = React.createContext({});

const mapReducer = (state, action) => {
    switch (action.type) {
        case 'addMarker':
            console.log(action.marker)
            return {...state, markers: [...state.markers, action.marker]}
        case 'displayMarkers':
            console.log(action.marker)
            return {...state, markers: [...state.markers, action.marker]}
        
        default: return {...state}
    }
}

export {mapReducer, MapContext}