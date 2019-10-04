import React, { useState } from 'react';
import Button from '../../components/Button/Button';
const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  function handleAddToCart() {
    let cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : {};
    let id = props.product.SKU;
    let title = props.product.title;
    let price = props.product.price;
    cart[id] = cart[id] ? cart[id] : 0;
    let qty = cart[id] + quantity;
    if (props.product.available_quantity < qty) {
      cart[id] = props.product.available_quantity;
    } else {
      cart[id] = qty;
      cart[title] = title;
      cart[price] = price;
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
