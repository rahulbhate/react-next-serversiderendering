// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';

function Cart() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <h4>This is cart component</h4>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuthInitial(Cart);
