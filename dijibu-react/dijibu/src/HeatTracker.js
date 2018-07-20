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
      `}</style>
      <div className="hour-tile">
        <h3>5</h3>
      </div>
    </div>
  );
}

export default HeatTracker;
