// This is the Link API
import React, { useState, useRef, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Button from '../src/components/Button/Button';
import List from '../src/components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuthInitial from '../utils/withAuthInitial';
import ProductCard from '../src/components/ProductCard/ProductCard';

function Products({ storeProducts }) {
  const [start] = useState(3);
  const [limit] = useState(3);

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
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

Products.getInitialProps = async () => {
  let start = 0;
  let limit = 3;
  const respon = await fetch(
    `http://localhost:8000/products?start=${start}&limit=${limit}`,
  );
  const data = await respon.json();
  const error = 'Module Not Found';
  if (data) {
    return { storeProducts: data };
  } else {
    return { storeProducts: error };
  }
};

export default withAuthInitial(Products);
