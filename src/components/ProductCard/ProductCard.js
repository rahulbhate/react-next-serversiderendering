import React, { useState } from 'react';
import Link from 'next/link';
const ProductCard = (props) => {
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
          <Link
            href={{
              pathname: '/product',
              query: {
                productId: props.product.id,
              },
            }}
            as={`product/${props.product.id}`}
          >
            <a className="btn btn-lg btn-block btn-outline-primary">
              Add to cart
            </a>
          </Link>
          <p className="card-text">{props.product.price}</p>
          <p>{props.product.GST}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
