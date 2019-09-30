import React, { useState } from 'react';
import Button from '../../components/Button/Button';
const ProductCard = (props) => {
  function handleAddToCart() {
    alert('called');
  }
  return (
    <>
      <div>
        <img
          src={`/static/products/product-${props.product.id}.png`}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 key={props.product.id} className="card-title">
            {props.product.title}
          </h4>
          <Button
            type={'primary'}
            title={'Add To Cart'}
            onClick={handleAddToCart}
          />
          <p className="card-text">{props.product.price}</p>
          <p>{props.product.GST}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
