import React from 'react';
import TrackersMain from './TrackersMain';
import { Route } from 'react-router-dom';
import dateFns from "date-fns";

function Day(props) {
  let dayDate = new Date(dateFns.getYear(props.wholeDate), dateFns.getMonth(props.wholeDate),props.date);

  return (
    <div>
      <h1>{props.date}
        <Route exact path='/' render={()=><TrackersMain
          dates={props.dates}
          date={dayDate}/>}/>
      </h1>
    </div>
  );
}

export default Day;
