// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';
import ProductCard from '../src/components/ProductCard/ProductCard';

function Cart({ storeProducts }) {
  console.log(storeProducts);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {storeProducts.map((product, index) => {
              return (
                <div className="col-md-4">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

Cart.getInitialProps = async () => {
  const respon = await fetch('http://localhost:8000/cart');
  const data = await respon.json();
  const error = 'Module Not Found';
  if (data) {
    return { storeProducts: data };
  } else {
    return { storeProducts: error };
  }
};

export default withAuthInitial(Cart);
