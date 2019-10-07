// This is the Link API
import React from 'react';
import fetch from 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';

function Speaker({ speaker }) {
  const [speakerData, setSpeakerData] = useState(speaker);
  console.log(speakerData);
  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Speaker Details</h2>
        </div>
      </div>
    </>
  );
}

Speaker.getInitialProps = async ({ query }) => {
  const respon = await fetch(
    `http://localhost:8000/speaker/${query.speakerId}`,
  );
  const data = await respon.data;
  console.log(data);
  const error = 'Module Not Found';
  if (data) {
    return { speaker: data };
  } else {
    return { speaker: error };
  }
};

export default withAuthInitial(Speaker);
