import * as React from 'react';
import "./ProductCard.css"

export default function MultiActionAreaCard({product:{name,price,picture}}) {
  return (
    <div className="food-card">
    <div className="food-card-img-container">
      <img src={picture} alt="Food Item" />
      <div className="food-card-title-container">
        <h3 className="food-card-title">{name}</h3>
        <p className="food-card-price">₪{price}</p>
      </div>
    </div>
  </div>
  );
}