// This is the Link API
import React from 'react';
import withAuth from '../utils/withAuth';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import speakerReducer from '../src/reducers/speakerReducer';
import Table from '../src/components/Table/Table';
import { useState, useEffect, useReducer } from 'react';

function Speakers({ speaker }) {
  const [speakersData, dispatch] = useReducer(speakerReducer, {
    speaker,
  });
  useEffect(() => {
    console.log(
      'UseEffect LifeCycle Method on Client Side get Called once Server Side Rendering Done',
    );
    dispatch({
      type: 'setSpeakersData',
      data: speakersData,
    });
    console.log('dispatch function called');
  }, []);

  return (
    <>
      {console.log(speakersData.speaker.speakers)}
      <hr />
      <ul>
        {speakersData.speaker.speakers.map((speaker, index) => {
          return <li key={speaker.id}>{speaker.firstName}</li>;
        })}
      </ul>
    </>
  );
}

Speakers.getInitialProps = async () => {
  const respon = await fetch('http://localhost:8000/speakers');
  const data = await respon.json();
  const error = 'Module Not Found';
  if (data) {
    return { speaker: data };
  } else {
    return { speaker: error };
  }
};

export default withAuth(Speakers);
