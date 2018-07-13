import React, { Component } from 'react';
import Day from './Day';
import dateFns from "date-fns";

class Calendar extends React.Component {

  renderWeekDays() {
    return(
      <div className="calendar-grid">
        <div className="day-marker">
          S
        </div>
        <div className="day-marker">
          M
        </div>
        <div className="day-marker">
          T
        </div>
        <div className="day-marker">
          W
        </div>
        <div className="day-marker">
          TH
        </div>
        <div className="day-marker">
          F
        </div>
        <div className="day-marker">
          S
        </div>
      </div>
    )
  }

  renderDays(){
    let result = dateFns.getDay(new Date());
  }

  render() {
    return (
      <div>
        <style>{`
          .calendar-grid {
            color: #DA6257;
            display: grid;
            grid-auto-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
            margin-left: 20px;
            margin-right: 20px;
            min-width: 330px;
          }

          .day-marker {
            display: inline;
            font-size: 5vw;
            text-align: center;
          }
        `}</style>
        <h1>June</h1>
        {this.renderWeekDays()}
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    );
  }

}
//https://blog.flowandform.agency/create-a-custom-calendar-in-react-3df1bfd0b728

export default Calendar;
