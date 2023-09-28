import React, { useState } from "react";
import "./Slider.css";
import { offers } from "../../constants/OffersConstant";
import CarouselItem from "../CarouselItem";
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevPage = () => {
    if (activeIndex != 0) setActiveIndex(activeIndex - 1);
    console.log(activeIndex);
  };
  const nextPage = () => {
    if (activeIndex != offers.length - 3) setActiveIndex(activeIndex + 1);
    console.log(activeIndex);
  };
  return (
    <div className="Slider">
      <div className="Slider-container">
        <ul
          style={{
            transform: `translateX(calc(-${activeIndex * 100}% / ${
              offers.length
            } - ${activeIndex * 20}px))`,
          }}
        >
          {offers.map((offer) => {
            return (
              <li>
                <img src={offer.img} alt="img" />
                <p>Place: {offer.place}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={prevPage} className="btn">
          Prev
        </button>
        <button onClick={nextPage} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
