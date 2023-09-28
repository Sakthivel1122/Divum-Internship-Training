import React from "react";
import "./CarouselItem.css";
const CarouselItem = ({ offer }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={offer.img} alt="" />
      <div className="carousel-item-text">{offer.place}</div>
    </div>
  );
};

export default CarouselItem;
