// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import speakerReducer from '../src/reducers/speakerReducer';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';

function Sessions({ speaker }) {
  const [sessionData, dispatch] = useReducer(speakerReducer, {
    speaker,
  });

  return (
    <>
      <ul>
        {sessionData.speaker.sessions.map((session, index) => {
          return <li key={index}>{session.title}</li>;
        })}
      </ul>
    </>
  );
}

Sessions.getInitialProps = async () => {
  const respon = await fetch('http://localhost:8000/sessions');

  const jj = await respon.json();

  return { speaker: jj };
};

export default withAuthInitial(Sessions);
