import React from 'react';

function Tracker(props) {
  let trackerContent;
  if (props.tracker.type === 'pie') {
    trackerContent =  (
      <div className="multi-tracker tracker-tile">
          <p>{props.tracker.name} - {props.tracker.value} <br />
          (tap to change)</p>
        // add in a function to change this
        // might want to make these into different components?
      </div>
    );
  } else if (props.tracker.type === 'wordcloud') {
    trackerContent = (
      <div className="text-tracker tracker-tile">
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
          <hr noshade="true" />
      </div>
    );
  } else if (props.tracker.type === 'heat') {
    trackerContent = (
      <div className="activity-tracker tracker-tile">
          <div className="hour-tile">
            <h3>5</h3>
          </div>
      </div>
    );
  } else if (props.tracker.type === 'boolean') {
    trackerContent = (
      <div className="boolean-tracker tracker-tile">
        <div className="star">
        </div>
      </div>
    );
  } else if (props.tracker.type === 'count') {
    trackerContent = (
      <div className="count-tracker tracker-tile">
        <input type="number" className="count-select-box" placeholder="16" />
      </div>
    );
  } else {
    trackerContent = (
      <div>
      </div>
    );
  }
  return (
    <div>
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
        }

        .tracker-tile:hover {
          animation: shake 0.25s linear infinite;
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

        .text-tracker {
          background-color: #E99259;
          grid-column: span 2;
          grid-row: span 3;
          padding: 40px;
        }

        .text-tracker hr {
          border: 1px solid white;
          margin-right: 6%;
          margin-bottom: 30px;
          margin-left: 6%;
        }

        .count-tracker {
          color: white;
          background-color: #092E46;
          grid-column: span 2;
          grid-row: span 2;
          min-height: 100px;
          display: flex;
          align-items: center;
        }

        .count-tracker label {
          font-size: 20vw;
          margin-left: 40px;
        }

        .count-tracker.tracker-tile label{
          font-size: 1000%;
          margin-left: 20px;
        }

        .count-select-box {
          border: none;
          background-color: inherit;
          color: white;
          font-size: 20vw;
          min-height: 100px;
          width: 40%;
        }

        .count-tracker.tracker-tile a .count-select-box{
          width: 100%;
        }

        .count-tracker.tracker-tile .count-select-box{
          font-size: 1000%;
          width: 60%;
        }

        .activity-tracker {
          background-color: #DA6257;
          grid-column: span 4;
          grid-row: span 1;
        }

        .activity-tracker.tracker-tile {
          align-items: center;
          display: flex;
        }

        .activity-tracker.tracker-tile a {
          align-items: center;
          display: flex;
        }

        .activity-block {
          display: flex;
          align-items: center;
          margin-bottom: -15px;
        }

        .hour-tile h3{
          background-color: #092E46;
          border-radius: 3px;
          color: white;
          font-size: 300%;
          height: 80px;
          margin-left: 20px;
          text-align: center;
          width: 80px;
        }

        .activity-select .form-select {
          background-color: #DA6257;
          border: none;
          color: white;
        }

        .boolean-tracker {
          background-color: #D7D7D7;
          grid-column: span 1;
          grid-row: span 1;
          padding: 40px;
        }

        .boolean-tracker.tracker-big {
          align-items: center;
          display: flex;
          justify-content: center;
          padding: 140px;
        }

        .star {
          background: #DA6257;
          height: 40vw;
          position: relative;
          text-align: center;
          width: 40vw;
        }

        .tracker-tile .star {
          height: 120px;
          width: 120px;
          bottom: 10px;
        }

        .star:before, .star:after {
          background: #DA6257;
          content: "";
          height: 40vw;
          left: 0;
          position: absolute;
          top: 0;
          width: 40vw;
        }

        .tracker-tile .star:before, .tracker-tile .star:after {
          height: 120px;
          width: 120px;

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
      { trackerContent }
    </div>
  )
}

export default Tracker;
