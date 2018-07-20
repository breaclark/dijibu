import React from 'react';
import Tracker from './Tracker';
import dateFns from "date-fns";

function TrackersMain(props) {

    let requestedDate = dateFns.format(props.date, 'MMMM D, YYYY');
    let requestedDatesTrackers;
    for(let i=0; i<props.dates.length; i++) {
      if (dateFns.format(props.dates[i].date, 'MMMM D, YYYY') === requestedDate){
        requestedDatesTrackers = props.dates[i].trackers;
      }
    }
    return (
      <div>
        <h1>{requestedDate}</h1>
        <p>{}</p>
        {Object.keys(requestedDatesTrackers).map(function(trackerId){
          const tracker = requestedDatesTrackers[trackerId];
          return <Tracker
            trackerId={trackerId}
            key={trackerId}
            tracker={tracker} />
        })}
        {/*// Should be able to get the date from the calendar as well
        // Then render and send appropriate data for each date
        // Only let trackers be changed if the date is today (later)
        // Get info passed down from top, then translate here into trackers*/}
      </div>
    );
}

export default TrackersMain;
