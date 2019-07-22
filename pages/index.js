// This is the Link API
import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Index({ speakers }) {
  const [speakersData, setSpeakersData] = useState({ speakers });

  useEffect(() => {
    console.log(
      'UseEffect LifeCycle Method on Client Side get Called once Server Side Rendering Done',
    );
  }, []);

  // console.log(speakersData);
  return (
    <>
      {console.log(speakersData.speakers)}
      <ul>
        {speakersData.speakers.map((speaker, index) => {
          return <li key={speaker.id}>{speaker.firstName}</li>;
        })}
      </ul>
    </>
  );
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:4000/speakers/');
  const json = await res.json();

  return { speakers: json };
};

export default Index;
