// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import speakerReducer from '../src/reducers/speakerReducer';
import Table from '../src/components/Table/Table';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';
import Router from 'next/router';
function Speakers({ speaker }) {
  const [speakersData, dispatch] = useReducer(speakerReducer, {
    speaker,
  });

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

export default withAuthInitial(Speakers);
