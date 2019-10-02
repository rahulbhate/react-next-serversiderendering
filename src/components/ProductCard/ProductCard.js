import React, { useState } from 'react';
import Button from '../../components/Button/Button';
const ProductCard = (props) => {
  const [quantity, setQty] = useState(0);
  function handleAddToCart() {
    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : {};
    let SKU = props.product.SKU;
    cart[SKU] = cart[SKU] ? cart[SKU] : 0;
    let qty = cart[SKU] + setQty(quantity + 1);
    if (props.product.available_quantity < qty) {
      cart[SKU] = props.product.available_quantity;
    } else {
      cart[SKU] = qty;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <>
      <div>
        <img
          src={`/static/products/product-${props.product.image}.png`}
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
