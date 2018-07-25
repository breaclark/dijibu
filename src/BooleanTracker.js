import React from 'react';

function BooleanTracker(props) {
  let starArea = props.tracker.value ?
    <div className="star"></div>
    : <div></div>

  function booleanChange() {
    props.trackerChange(!props.tracker.value, props.trackerId, props.tracker.type, props.date, props.defaultInfo);
  }

  return (
    <div className="boolean-tracker tracker-tile" onClick={booleanChange}>
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
        }

        .boolean-tracker {
          background-color: #D7D7D7;
          grid-column: span 1;
          grid-row: span 1;
          padding: 40px;
        }

        .star {
          background: #DA6257;
          position: relative;
          text-align: center;
          height: 110px;
          width: 110px;
          bottom: 10px;
        }

        .star:before, .star:after {
          background: #DA6257;
          content: "";
          height: 110px;
          left: 0;
          position: absolute;
          top: 0;
          width: 110px;
        }

        .star:before {
            -webkit-transform: rotate(30deg);
               -moz-transform: rotate(30deg);
                -ms-transform: rotate(30deg);
                 -o-transform: rotate(30deg);
        }
        .star:after {
            -webkit-transform: rotate(60deg);
               -moz-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                 -o-transform: rotate(60deg);
        }
      `}</style>
      {starArea}
    </div>
  );
}

export default BooleanTracker;
