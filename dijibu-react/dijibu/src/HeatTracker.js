import React from 'react';
import HeatTrackerTile from './HeatTrackerTile';

function HeatTracker(props) {

  function heatChange(newHeatTiles) {
    props.trackerChange(newHeatTiles, props.trackerId, props.tracker.type, props.date, props.defaultInfo);
  }

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

        function heatTileChange() {
          let newHeatTiles = props.tracker.value.slice();
          let newValueIndex = props.tracker.options.indexOf(props.tracker.value[hourTile]);
          if (newValueIndex === props.tracker.options.length-1) {
            newValueIndex = 0;
          } else {
            newValueIndex += 1;
          }
          newHeatTiles[hourTile] = props.tracker.options[newValueIndex];
          heatChange(newHeatTiles);
        }

        return (
          <HeatTrackerTile
            hourTile={hourTile}
            hourValue={props.tracker.value[hourTile]}
            bgStyle = {bgStyle}
            onTileChange = {heatTileChange}/>
        );
      })}
    </div>
  );
}

export default HeatTracker;
