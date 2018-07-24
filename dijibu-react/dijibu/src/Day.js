import React from 'react';
import TrackersMain from './TrackersMain';
import { Link } from 'react-router-dom';
import dateFns from "date-fns";

function Day(props) {

  let dayDate = new Date(dateFns.getYear(props.wholeDate), dateFns.getMonth(props.wholeDate),props.date);
  function dateClick() {
    props.onDateClick(dayDate, props.id);
  }

  return (
    <div>
      <Link to='/trackers' onClick = {dateClick} ><h1>{props.date}</h1></Link>
    </div>
  );
}

export default Day;
