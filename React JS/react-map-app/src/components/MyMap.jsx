import React from "react";
import { useEffect, useState } from "react";
import Map, {
  NavigationControl,
  Marker,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  MapProvider,
  Popup,
  useMap,
  AttributionControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
//
import { Source, Layer } from "react-map-gl/maplibre";
import { CircleLayer } from "react-map-gl/maplibre";
import { FeatureCollection } from "geojson";
// react leaflet
const MyMap = () => {
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [ 77.687524,12.942786 ] },
    },
  ],
};
const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "red",
  },
};
//
  const [showPopup, setShowPopup] = useState(true);
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
    console.log(location);
  };
  window.onload = clickLoc;
  return (
    <div className="MyMap">
      <Map
        id="mymap"
        mapLib={maplibregl}
        initialViewState={{
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: 10,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=MHdzunc1wzN53Dd2CzRS"
      >
        <Marker latitude={location.latitude} longitude={location.longitude+0.1} color="red"></Marker>
        <Marker
          latitude={location.latitude + 0.1}
          longitude={location.longitude + 0.1}
          color="white"
        ></Marker>
        {/* <Marker latitude={12.942786} longitude={77.687524} color="red"></Marker> */}
        {/* <Marker
          latitude={10.942786}
          longitude={77.687524}
          color="blue"
        ></Marker> */}
        <NavigationControl />
        <GeolocateControl showAccuracyCircle={false} />
        <FullscreenControl />
        <ScaleControl />
        <Popup
          latitude={location.latitude}
          longitude={location.longitude}
          anchor="bottom"
          closeButton={false}
          closeOnClick={false}
        >
          You are here
        </Popup>
        {/* <Popup
          latitude={location.latitude}
          longitude={location.longitude+0.1}
          anchor="top"
          closeButton={false}
          closeOnClick={false}
        >
          Cab 1
        </Popup> */}
        <Popup
          latitude={location.latitude + 0.1}
          longitude={location.longitude + 0.1}
          anchor="bottom"
          closeButton={false}
          closeOnClick={false}
          className="cab-2"
        >
          Cab 2
        </Popup>
        <NavigateButton />
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  );
};

function NavigateButton() {
  const { current: map } = useMap();

  const onClick = () => {
    map.flyTo({ center: [-122.4, 37.8] });
  };

  return (
    <button onClick={onClick} className="go-btn">
      Go
    </button>
  );
}
export default MyMap;
