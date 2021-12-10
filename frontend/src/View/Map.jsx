import React from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import {formatRelative} from "date-fns"

const libraries = ["places"];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const center = {
    lat: 43.653225,
    lng: -79.383186
}
export default function Map() {
    const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: "AIzaSyCMcxCQYmEY_IEIrfpCu81zT94FDh1vvAs",
            libraries
        }
    )
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
        >

        </GoogleMap>
    );
}