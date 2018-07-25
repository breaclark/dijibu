import React from 'react';

function CountTracker(props) {
  let inputValue = Number(props.tracker.value);

  function countChange() {
    props.trackerChange(inputValue.value, props.trackerId, props.tracker.type, props.date, props.defaultInfo);
  }

  return (
    <div className="count-tracker tracker-tile">
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
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
          min-width: 300px;
          width: 40%;
          margin-left: 20px;
        }

        .count-tracker.tracker-tile a .count-select-box{
          width: 100%;
        }

        .count-tracker.tracker-tile .count-select-box{
          font-size: 1000%;
          width: 60%;
        }
      `}</style>
    <input type="number" className="count-select-box" onChange={countChange} value={inputValue} ref={(input) => {inputValue = input;}}/>
    </div>
  );
}

export default CountTracker;
