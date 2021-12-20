import React, {useCallback, useRef, useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import {formatRelative} from "date-fns"

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw',
    height: '93vh'
}
const center = {
    lat: 20.995860,
    lng: 105.891780
}
export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: "AIzaSyCMcxCQYmEY_IEIrfpCu81zT94FDh1vvAs",
            libraries
        }
    )
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const onMapClick = useCallback(
        (event) => {
            setMarkers(current => [...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date()
            }])
        },
        []);
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    if (loadError) {
        return "Error loading maps";
    }
    if (!isLoaded) {
        return "Loading maps";
    }
    return (
        <GoogleMap mapContainerStyle = {mapContainerStyle}
                   zoom = {8}
                   center = {center}
                   onClick = {onMapClick}
                   onLoad = {onMapLoad}
        >
            {markers.map(marker =>
                <Marker key={marker.time.toISOString()}
                        position ={{lat:marker.lat, lng:marker.lng}}
                        onClick={() => {
                            setSelected(marker);
                        }}
                /> )}
            {selected ? (<InfoWindow
                position = {{lat: selected.lat, lng: selected.lng}}
                onCloseClick = {() => {setSelected(null);}}
            >
                <div>
                    Đây là một địa danh nào đó
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
    );
}