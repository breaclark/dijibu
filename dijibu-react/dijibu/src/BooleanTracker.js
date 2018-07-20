import React from 'react';

function BooleanTracker(props) {
  return (
    <div className="boolean-tracker tracker-tile">
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
      <div className="star">
      </div>
    </div>
  );
}

export default BooleanTracker;
