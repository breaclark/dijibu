import React from 'react';

function HeatTrackerTile (props) {
  return (
    <div className="hour-tile" onClick={props.onTileChange}>
      <style>{`
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
    <h3 style={props.bgStyle}>{Number(props.hourTile) + 1}</h3>
      <p className="hour-info">{props.hourValue}</p>
    </div>
  );
}

export default HeatTrackerTile;
