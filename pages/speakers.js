// This is the Link API
import React from 'react';

import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Speakers({ speaker }) {
  const [speakersData, setSpeakersData] = useState({ speaker });

  useEffect(() => {
    console.log(
      'UseEffect LifeCycle Method on Client Side get Called once Server Side Rendering Done',
    );
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
  const respon = await fetch('http://localhost:8080/speakers');
  const data = await respon.json();
  return { speaker: data };
};

export default Speakers;
