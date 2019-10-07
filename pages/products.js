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
  const [start,setStart] = useState(4);
  const [limit] = useState(6);
  const [listItems, setListItems] = useState(storeProducts);
  const [newProds,setNewProds] = useState();
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  async function fetchMoreListItems() {
    let newStart = start+limit;
    setStart(newStart)
    const respon = await fetch(
      `http://localhost:8000/products?start=${start}&limit=${limit}`,
    );
    const data = await respon.json();
    const error = 'Module Not Found';
    if (data) {
      setListItems((prevState) => [
        ...prevState,
        ...data
      ])
      console.log(data,start,limit);
    } else {
      return { storeProducts: error };
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {listItems.map((product, index) => {
              return (
                <div className="col-md-4">
                  <ProductCard product={product} />
                </div>
              );
            })}
            {isFetching && 'Fetching more list items...'}
          </div>
        </div>
      </div>
    </>
  );
}

Products.getInitialProps = async () => {
  let start = 0;
  let limit = 6;
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
