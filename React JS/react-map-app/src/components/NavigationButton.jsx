import React from "react";
import { useMap } from "react-map-gl";
const NavigationButton = () => {
  const { current: map } = useMap();

  const onClick = () => {
    map.flyTo({ center: [12.942786, 77.687524] });
  };
  return <button onClick={onClick}>Go</button>;
};

export default NavigationButton;
