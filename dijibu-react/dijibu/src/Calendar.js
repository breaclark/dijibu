import React, { Component } from 'react';
import Day from './Day';
import dateFns from "date-fns";

class Calendar extends React.Component {

  currentMonth() {
    let monthNum =  dateFns.getMonth(new Date());
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthNum];
  }

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
    // for each month, getDaysInMonth
    // put the first day at the correct weekday, getDay()
    // continue to make days as necessary
    // default to current month, have arrows for other months


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
        <h1>{this.currentMonth()}</h1>
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
