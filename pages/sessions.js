// This is the Link API
import React from 'react';
import Link from 'next/link';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Link href="/">
        <a>Home Page</a>
      </Link>
      {console.log(speakersData.speaker.sessions)}

      <ul>
        {speakersData.speaker.sessions.map((session, index) => {
          return <li key={index}>{session.title}</li>;
        })}
      </ul>
    </>
  );
}

Index.getInitialProps = async () => {
  const respon = await fetch('http://localhost:8080/sessions');

  const jj = await respon.json();

  return { speaker: jj };
};

export default Index;
