import React from 'react';
import { Link } from 'react-router-dom';
import dateFns from "date-fns";

function Day(props) {

  function dateClick() {
    props.onDateClick(props.id);
  }

  let bgColor;
  if (props.id === dateFns.format(dateFns.startOfDay(new Date()), 'MM-DD-YY')) {
    bgColor = "#d7d7d7";
  } else {
    bgColor = "transparent";
  }
  let todayStyle = {
    backgroundColor: bgColor,
    borderRadius: '3px'
  }

  return (
    <div>
      <style>{`
        h1 {
          font-size: 5vw;
          margin-top: 10px;
        }
      `}</style>
      <Link to='/trackers' onClick = {dateClick} ><h1 style={todayStyle}>{props.date}</h1></Link>
    </div>
  );
}

export default Day;
