import React from 'react';

function Tracker(props) {
  if (props.tracker.type === 'pie') {
    return (
      <div className="multi-tracker tracker-tile">
          <p>{props.tracker.name} - {props.tracker.value} <br />
          (tap to change)</p>
        // add in a function to change this
        // might want to make these into different components?
      </div>
    );
  } else if (props.tracker.type === 'wordcloud') {
    return (
      <div>
      </div>
    );
  } else if (props.tracker.type === 'heat') {
    return (
      <div>
      </div>
    );
  } else if (props.tracker.type === 'boolean') {
    return (
      <div>
      </div>
    );
  } else if (props.tracker.type === 'count') {
    return (
      <div>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
    return (
      <div>

        <h1>{props.tracker.name}</h1>
        <p>{props.tracker.options}</p>
        <p>{props.tracker.value}</p>
      </div>
    );
}

export default Tracker;
