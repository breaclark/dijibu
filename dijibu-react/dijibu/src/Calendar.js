import React, { Component } from 'react';
import Day from './Day';
import dateFns from "date-fns";

class Calendar extends React.Component {

  render() {
    return (
      <div>
        <style>{`
        `}</style>
        <h1>June</h1>
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
