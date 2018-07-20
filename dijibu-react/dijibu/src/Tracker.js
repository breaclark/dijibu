import React from 'react';

function Tracker(props) {
    return (
      <div>
        <h1>{props.tracker.name}</h1>
        <p>{props.tracker.options}</p>
        <p>{props.tracker.value}</p>
      </div>
    );
}

export default Tracker;
