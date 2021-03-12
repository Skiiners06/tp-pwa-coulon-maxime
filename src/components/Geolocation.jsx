import React, {useEffect, useState} from 'react';
import {useMap} from 'react-leaflet'

const Geolocation = () => {
    const map = useMap();
    
    const [latitude, setLatitude] = useState(undefined);
    const [longitude, setLongitude] = useState(undefined);
    const [withGeoloc, setWithGeoloc] = useState(undefined);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }
        )
    },[withGeoloc])

    useEffect(() => {
        if(latitude && longitude) {
            map.setView([latitude, longitude])
        }
    }, [latitude, longitude])

    return (
        <>
            <label htmlFor={'withGeoloc'}>Géoloc</label>
            <input style={{position:'absolute', zIndex:'999'}} type={'checkbox'} checked={withGeoloc} onChange={()=> setWithGeoloc(prev => !prev)} id={'withGeoloc'}/>
        </>
    )

}


export default Geolocation