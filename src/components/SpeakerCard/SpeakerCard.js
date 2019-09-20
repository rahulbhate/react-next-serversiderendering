import React, { useState } from 'react';
const SpeakerCard = (props) => {
  console.log(props.speaker.firstName);

  return (
    <>
      <div>
        <img
          src={`/static/speakers/Speaker-${props.speaker.id}.jpg`}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 key={props.speaker.id} className="card-title">
            {props.speaker.firstName}
          </h4>
          <p className="card-text">{props.speaker.bioShort}</p>
        </div>
      </div>
    </>
  );
};

export default SpeakerCard;
