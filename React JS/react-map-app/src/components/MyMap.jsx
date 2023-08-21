import React from "react";
import { useEffect, useState } from "react";
import Map, {
  NavigationControl,
  Marker,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  MapProvider,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
const MyMap = () => {
  const [location, setLocation] = useState({
    latitude: 12.958184,
    longitude: 77.6421466,
  });
  useEffect(() => {
    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };
    const error = () => {
      console.log("Error while accessing location...");
    };
    navigator.geolocation.getCurrentPosition(success, error);
    console.log(location.lat, location.lng);
  }, []);
  const clickLoc = () => {
    document.getElementsByClassName("maplibregl-ctrl-geolocate")[0].click();
  };
  window.onload = clickLoc;
  return (
    <div className="MyMap">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: 5,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=IXqXD0az0rwhljJe4aVx"
      >
        <Marker latitude={12.942786} longitude={77.687524} color="red"></Marker>
        <NavigationControl />
        <GeolocateControl showAccuracyCircle={false} />
        <FullscreenControl />
        <ScaleControl />
      </Map>
    </div>
  );
};

export default MyMap;
