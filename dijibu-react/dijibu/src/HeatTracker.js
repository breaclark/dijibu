import React from 'react';

function HeatTracker(props) {
  return (
    <div className="activity-tracker tracker-tile">
      <style>{`
        .tracker-tile {
          border-radius: 3px;
          position: relative;
        }

        .activity-tracker {
          align-items: center;
          display: flex;
          border: 6px solid #DA6257;
          grid-column: span 4;
          grid-row: span 1;
          overflow: auto;
          overflow-y: hidden;
        }

        .activity-tracker.tracker-tile a {
          align-items: center;
          display: flex;
        }

        .hour-tile {
          position: relative;
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

        .hour-info {
          top: 0;
          left: 20px;
          font-size: 14px;
          position: absolute;
          color: #092E46;
          display: none;
        }

        .hour-tile:hover .hour-info{
          display: block;
        }
      `}</style>
      {Object.keys(props.tracker.value).map(function(hourTile){
        let options = props.tracker.options;
        let colorOptions = ["transparent", "#DA6257", "#092e46", "#738678", "#e99259", "#f6d1b9", "#d7d7d7", "#c9e6d1", "#0f527d"];
        let dict = {};
        options.forEach((key, i) => dict[key] = colorOptions[i]);
        let fontColor = dict[props.tracker.value[hourTile]] === "transparent" ?
        "#092E46" : "white"
        let bgStyle = {
          backgroundColor: dict[props.tracker.value[hourTile]],
          color: fontColor
        }
        return (
          <div className="hour-tile" key={hourTile}>
            <h3 style={bgStyle}>{parseInt(hourTile) + 1}</h3>
            <p className="hour-info">{props.tracker.value[hourTile]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default HeatTracker;
