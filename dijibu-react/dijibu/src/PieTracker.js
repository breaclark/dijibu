import React from 'react';

function PieTracker(props) {

  let newValueIndex = props.tracker.options.indexOf(props.tracker.value);
  let colorsOptions = ["#DA6257", "#092e46", "#738678", "#e99259", "#f6d1b9", "#d7d7d7"];
  let bgColor = { backgroundColor: colorsOptions[newValueIndex]}

  function pieChange() {
    if (newValueIndex === props.tracker.options.length-1) {
      newValueIndex = 0;
    } else {
      newValueIndex += 1;
    }
    let newValue = props.tracker.options[newValueIndex];
    props.trackerChange(newValue, props.trackerId, props.tracker.type, props.date, props.defaultInfo);
  }

  return(
    <div className="multi-tracker tracker-tile" onClick={pieChange} style={bgColor}>
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
        }

        .multi-tracker {
          align-items: center;
          background-color: #738678;
          color: white;
          display: flex;
          grid-column: span 2;
          grid-row: span 1;
          justify-content: center;
        }

        .multi-tracker p {
          color: white;
          font-size: 2vw;
        }
      `}</style>
    <p>{props.tracker.value}</p>
    </div>
  );
}

export default PieTracker;
