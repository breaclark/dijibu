import React from 'react';

function Tracker(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.options}</p>
        <p>{props.value}</p>
      </div>
    );
}

export default Tracker;
