import React from 'react';
import { Link } from 'react-router-dom';

function Day(props) {

  function dateClick() {
    props.onDateClick(props.id);
  }

  return (
    <div>
      <Link to='/trackers' onClick = {dateClick} ><h1>{props.date}</h1></Link>
    </div>
  );
}

export default Day;
