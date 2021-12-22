import React, {useCallback, useEffect, useRef, useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import {formatRelative} from "date-fns"
import {List, ListItem} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import LocationApi from "../common/Api/LocationApi";

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
    const navigate = useNavigate();
    const {isLoaded, loadError} = useLoadScript({
            googleMapsApiKey: "AIzaSyCMcxCQYmEY_IEIrfpCu81zT94FDh1vvAs",
            libraries
        }
    )
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [locationList, setLocationList] = useState([]);
    const locationApi = new LocationApi();
    const mapRef = useRef();
    let handleLoginSuccess = (posts) => {
        setLocationList(posts)
        alert('Login success!!!')
    }

    let handleLoginFailure = (error) => {
        alert(error)
    }
    useEffect(() => {
        locationApi.getListLocation().then(response => {
            console.log(response);
        })
        console.log(locationList);
    }, []);

    const onMapClick = useCallback(
        (event) => {
            setMarkers(current => [...current, {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date()
            }])
        },
        []);
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
                    <div>
                        <img
                            src="../test.JPG"
                        />
                    </div>
                    <div>
                        <List>
                            <ListItem>
                                Văn Miếu Xích đằng
                            </ListItem>
                            <ListItem>
                                <button
                                    onClick={() => {
                                        navigate('/location');
                                    }}
                                >
                                    Tìm hiểu thêm
                                </button>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
    );
}