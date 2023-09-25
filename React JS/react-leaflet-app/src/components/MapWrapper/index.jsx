import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./MapWrapper.css"
import {
  GeoSearchControl,
  LocationIQProvider,
  OpenStreetMapProvider,
} from "leaflet-geosearch";

// import icon from "../../constants/constants";
import { icon, icon2 } from "../../constants/constants";
// import { Marker } from "leaflet";

// Cordinates of Marcillac
const center = [12.942786, 77.687524];
const purpleOptions = { color: "white" };

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        icon,
      },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

//
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
    console.log(">> position", position);
  }, [map]);

  return position === null
    ? null
    : null;
      //   <Marker position={position} icon={icon}>
      //     <Popup>
      //       You are here. <br />
      //       Map bbox: <br />
      //       <b>Southwest lng</b>: {bbox[0]} <br />
      //       <b>Southwest lat</b>: {bbox[1]} <br />
      //       <b>Northeast lng</b>: {bbox[2]} <br />
      //       <b>Northeast lat</b>: {bbox[3]}
      //     </Popup>
      //   </Marker>
}
//

const MapWrapper = () => {
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
    console.log(location?.latitude, location?.longitude);
  }, []);

  return (
    <div id="mapid">
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletgeoSearch/>
        <Marker position={[location.latitude, location.longitude]} icon={icon2} className="marker">
          <Popup>You are here</Popup>
        </Marker>
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
};

export default MapWrapper;
