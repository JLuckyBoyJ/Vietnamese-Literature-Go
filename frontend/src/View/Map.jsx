import React, {useCallback, useEffect, useRef, useState} from 'react'
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import {formatRelative} from "date-fns"
import {List, ListItem} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import LocationApi from "../common/Api/LocationApi";
import HomeDataManager from "./HomeDataManager";

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
    const mapRef = useRef();
    const dataManager = new HomeDataManager();
    let handleLoginSuccess = (posts) => {
        const temp = [];
        for (let i in posts) {
            temp.push(posts[i]);
        }
        setLocationList(temp);
    }

    let handleLoginFailure = (error) => {
        alert(error)
    }
    useEffect(() => {
        dataManager.getLocationList(handleLoginSuccess, handleLoginFailure);
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
            {/* {markers.map(marker =>
                <Marker key={marker.time.toISOString()}
                        position ={{lat:marker.lat, lng:marker.lng}}
                        onClick={() => {
                            setSelected(marker);
                        }}
                /> )} */}
            {locationList.map(
                location => 
                <Marker key = {location.id}
                        position={{lat:location.lat, lng:location.lon}}
                        onClick={() => {
                            setSelected(location);
                        }}
                />
            )
            }    
            {selected ? (<InfoWindow
                position = {{lat: selected.lat, lng: selected.lon}}
                onCloseClick = {() => {setSelected(null);}}
            >
                <div>
                    {/* <div>
                        <img
                            src="../test.JPG"
                        />
                    </div> */}
                    <div>
                        <List>
                            <ListItem>
                            {selected.place}
                            </ListItem>
                            <ListItem>
                                <div className="button"
                                    onClick={() => {
                                        navigate('/location');
                                    }}
                                >
                                    <b>Tìm hiểu thêm </b>
                                </div>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
    );
}