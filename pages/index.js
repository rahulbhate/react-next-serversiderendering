// This is the Link API
import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Index({ speaker }) {
  const [speakersData, setSpeakersData] = useState({ speaker });

  useEffect(() => {
    console.log(
      'UseEffect LifeCycle Method on Client Side get Called once Server Side Rendering Done',
    );
  }, []);

  return (
    <>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <hr />
      <Link href="/login">
        <a>Login Page</a>
      </Link>
      <hr />
      <Link href="/sessions">
        <a>Sessions Page</a>
      </Link>
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

Index.getInitialProps = async () => {
  const respon = await fetch('http://localhost:8080/');
  const data = await respon.json();
  return { speaker: data };
};

export default Index;
