// This is the Link API
import React, { useState, useRef, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Button from '../src/components/Button/Button';
import List from '../src/components/List/List';
import useInfiniteScroll from '../src/components/List/useInfiniteScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import withAuthInitial from '../utils/withAuthInitial';
import ProductCard from '../src/components/ProductCard/ProductCard';

function Products({ storeProducts }) {
  const [start] = useState(3);
  const [limit] = useState(3);
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  function fetchMoreListItems() {
    alert('called');
    const respon = fetch(
      `http://localhost:8000/products?start=${start}&limit=${limit}`,
    );
    console.log(respon);
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }
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
            <ul className="list-group mb-2">
              {listItems.map((listItem, index) => (
                <li className="list-group-item">List Item {listItem}</li>
              ))}
            </ul>
            {isFetching && 'Fetching more list items...'}
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
