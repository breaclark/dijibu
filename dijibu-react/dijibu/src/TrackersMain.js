import React from 'react';
import Tracker from './Tracker';
import dateFns from "date-fns";

function TrackersMain(props) {
    return (
      <div>
        <h1>{dateFns.format(props.date, 'MMMM D, YYYY')}</h1>
        {/*// Should be able to get the date from the calendar as well
        // Then render and send appropriate data for each date
        // Only let trackers be changed if the date is today (later)
        // Get info passed down from top, then translate here into trackers
        // {Object.keys(trackers).map(function(trackerId){
        //   const tracker =trackers[trackerId];
        //   return <Tracker
        //     historyId={trackerId}
        //     key={trackerId}
        //     tracker={tracker} />
        // })}*/}
      </div>
    );
}

export default TrackersMain;
