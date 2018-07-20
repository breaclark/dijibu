import React from 'react';
import Day from './Day';
import dateFns from "date-fns";
import { v4 } from 'uuid';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date
    }
    this.currentMonth = this.currentMonth.bind(this);
    this.renderSingleDay = this.renderSingleDay.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  currentMonth() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[dateFns.getMonth(this.state.date)];
  }

  renderSingleDay(dayNum) {
    function clicky () {
      console.log(this.state.date);
    }
    return(
      <Day onClick={clicky} key={v4()} date={dayNum} />
    );
  }

  renderDays(){
    let firstWeekDay = dateFns.getDay(dateFns.startOfMonth(this.state.date));
    let monthDays = [];
    for(let i=0; i< firstWeekDay; i++) {
      monthDays.push(this.renderSingleDay(""));
    }
    for(let i=1; i<= dateFns.getDaysInMonth(this.state.date); i++) {
      monthDays.push(this.renderSingleDay(String(i)));
    }
    return monthDays;

  }

  previousMonth(){
    this.setState({
      date: dateFns.subMonths(dateFns.startOfMonth(this.state.date), 1)
    });
  }

  nextMonth() {
    this.setState({
      date: dateFns.addMonths(dateFns.startOfMonth(this.state.date), 1)
    });
  }

  render() {
    return (
      <div>
        <style>{`
          .calendar-header {
            align-items: center;
            display: flex;
            justify-content: space-around;
          }

          .month-forward, .month-back {
            color: #DA6257;
            display: inline;
            font-size: 8vw;
          }

          .calendar-grid {
            color: #DA6257;
            display: grid;
            grid-auto-rows: 5em;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
            margin-left: 20px;
            margin-right: 20px;
            min-width: 330px;
          }

          .day-marker {
            display: inline;
            font-size: 8vw;
            text-align: center;
          }
        `}</style>
        <div className="calendar-header">
          <div onClick={this.previousMonth} className="month-back">&#8678;</div>
          <h1>{this.currentMonth()}</h1>
          <div onClick={this.nextMonth} className="month-forward">&#8680;</div>
        </div>
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
          {this.renderDays()}
        </div>
      </div>
    );
  }
}

export default Calendar;
