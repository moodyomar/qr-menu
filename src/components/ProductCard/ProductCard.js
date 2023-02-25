import * as React from 'react';
import "./ProductCard.css"

export default function MultiActionAreaCard({product:{name,price,picture},endPoint}) {
  
const defaultPic = picture ? picture : "logo-t.png"

  return (
    <div className="food-card" data-aos={`zoom-in`} data-aos-duration="1000">
    <div className="food-card-img-container">
      <img className="logo" src={`${endPoint}logo.png`}/>
      <img src={`${endPoint}${defaultPic}`} alt="Safaa Sweets" />
      <div className="food-card-title-container">
        <h3 className="food-card-title">{name}</h3>
        <p className="food-card-price">₪{price}</p>
      </div>
    </div>
  </div>
  );
}