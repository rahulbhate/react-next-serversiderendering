// This is the Link API
import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import axios from 'axios';

import { useState, useEffect } from 'react';

function Index({ user, speaker }) {
  const [speakersData, setSpeakersData] = useState({ user, speaker });

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
      <Link href="/sessions">
        <a>Sessions Page</a>
      </Link>
      {console.log(speakersData.speaker.speakers)}
      <hr />
      <b style={{ color: '#4CAF50' }}>
        Hello, {user.message} this message is from server
      </b>
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
  const res = await fetch('http://localhost:8080/user/rahul');
  const data = await respon.json();
  const data2 = await res.json();
  return { user: data2, speaker: data };
};

export default Index;
