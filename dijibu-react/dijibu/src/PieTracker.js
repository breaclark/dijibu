import React from 'react';

function PieTracker(props) {
  console.log(props.tracker);
  return(
    <div className="multi-tracker tracker-tile">
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
