import React, { useState } from 'react';

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [product, setProduct] = useState({
    id: props.product.SKU,
    title: props.product.title,
    price: props.product.price,
  });

  const handleAddToCart = () => {
    console.log(product);
    setCart((curr) => [...curr, product]);
    setCartItems((cartItems) => ({
      ...cartItems,
      ['id']: props.product.SKU,
      ['title']: props.product.title,
    }));
    console.log(cartItems);
    console.log(cart);
  };

  return (
    <>
      <div onClick={props.onClick}>
        <img
          src={`/static/products/product-${props.product.image}.png`}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 key={props.product.id} className="card-title">
            {props.product.title}
          </h4>
          {/* <Button
            type={'primary'}
            title={'Add To Cart'}
            onClick={handleAddToCart}
          /> */}
          {/* <button onClick={props.handleAddToCart}>Add To Cart</button> */}
          <p className="card-text">{props.product.price}</p>
          <p>{props.product.GST}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
