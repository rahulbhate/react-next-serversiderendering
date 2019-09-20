// This is the Link API
import React from 'react';
import 'isomorphic-unfetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import speakerReducer from '../src/reducers/speakerReducer';
import Table from '../src/components/Table/Table';
import { useState, useEffect, useReducer } from 'react';
import withAuthInitial from '../utils/withAuthInitial';
import SpeakerCard from '../src/components/SpeakerCard/SpeakerCard';

function Speakers({ speaker }) {
  const [speakersData, setSpeakerData] = useState(speaker);
  console.log(speakersData);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {speakersData.speakers.map((speaker, index) => {
              return (
                <div className="col-md-4">
                  <SpeakerCard speaker={speaker} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
