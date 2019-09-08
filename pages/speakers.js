// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import speakerReducer from '../src/reducers/speakerReducer';
import Table from '../src/components/Table/Table';
import { useState, useEffect, useReducer } from 'react';
import AuthHelperMethods from '../utils/AuthHelperMethods';
import Router from 'next/router';
function Speakers({ speaker }) {
  const Auth = new AuthHelperMethods();
  const [speakersData, dispatch] = useReducer(speakerReducer, {
    speaker,
  });
  useEffect(() => {
    if (!Auth.loggedIn()) {
      Router.push('/login')
    }
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

export default Speakers;
