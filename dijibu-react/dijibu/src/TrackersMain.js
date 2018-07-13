import React from 'react';
import Tracker from './Tracker';
import dateFns from "date-fns";

function TrackerMain(props) {
    return (
      <div>
        <h1>{dateFns.format(props.date, 'MMMM D, YYYY')}</h1>
        <Tracker />
        <Tracker />
        <Tracker />
        <Tracker />
      </div>
    );
}

export default TrackerMain;
