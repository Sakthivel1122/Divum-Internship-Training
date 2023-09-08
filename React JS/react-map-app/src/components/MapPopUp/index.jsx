import * as React from 'react';
import {useState} from 'react';
import Map, {Popup} from 'react-map-gl/maplibre';
import "maplibre-gl/dist/maplibre-gl.css";
function MapPopUp() {
  const [showPopup, setShowPopup] = useState(true);

  return <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key"
  >
    {showPopup && (
      <Popup longitude={-100} latitude={40}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
  </Map>;
}

export default MapPopUp;