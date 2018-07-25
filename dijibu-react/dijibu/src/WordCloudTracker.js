import React from 'react';
import WordCloudTrackerItem from './WordCloudTrackerItem';

function WordCloudTracker(props) {

  let inputValue = null;

  function wordCloudChange(event) {
    event.preventDefault();
    props.trackerChange(inputValue.value, props.trackerId, props.tracker.type, props.date, props.defaultInfo);
    inputValue.value = '';
  }

  return (
    <div className="text-tracker tracker-tile">
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
        }

        .text-tracker {
          background-color: #E99259;
          grid-column: span 2;
          grid-row: span 3;
          padding: 40px;
          min-width: 200px;
          overflow-y: scroll;
        }

        .text-tracker input {
          height: 26px;
        }

        .text-tracker button {
          height: 33px;
          margin-left: 20px;
        }

        .text-tracker form input,button{
          background-color: transparent;
          border: 3px solid #f6d1b9;
          color: white;
          font-size: 14pt;
          margin-top: 20px;
        }
      `}</style>
    {Object.keys(props.tracker.value).map(function(lineValue){
      return (
        <WordCloudTrackerItem lineValue={props.tracker.value[lineValue]} key={lineValue}/>
      );
    })}
    <form onSubmit={wordCloudChange}>
      <input type="text" ref={(input) => {inputValue = input;}}/>
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default WordCloudTracker;
