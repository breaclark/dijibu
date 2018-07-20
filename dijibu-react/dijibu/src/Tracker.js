import React from 'react';

function Tracker(props) {
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
    </div>
  )
}

export default Tracker;
