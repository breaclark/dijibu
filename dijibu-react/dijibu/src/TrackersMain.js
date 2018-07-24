import React from 'react';
import dateFns from "date-fns";
import PieTracker from './PieTracker';
import WordCloudTracker from './WordCloudTracker';
import HeatTracker from './HeatTracker';
import BooleanTracker from './BooleanTracker';
import CountTracker from './CountTracker';

function TrackersMain(props) {
    let defaultInfo = false;
    let requestedDate = dateFns.format(props.date, 'MMMM D, YYYY');
    let requestedDatesTrackers;
    if(props.dates[props.dateId]) {
      requestedDatesTrackers = props.dates[props.dateId].trackers;
    } else {
      defaultInfo = true;
      requestedDatesTrackers = [
      { "name" : "Mood",
        "type" : "pie",
        "options" : ["Happy", "Frustrated", "Moody", "Sad", "Thoughtful"],
        "value" : "Happy"
      },
      { "name" : "Purchase",
        "type" : "wordcloud",
        "options" : [],
        "value" : ["milk", "orange juice", "bread"]
      },
      { "name" : "Activity",
        "type" : "heat",
        "options" : ["", "Sleeping", "Driving", "Cooking", "Exercising", "Watching TV", "Reading", "Shopping", "Working"],
        "value" : ["Sleeping", "Sleeping", "", "Sleeping", "", "", "Sleeping", "Sleeping", "Cooking", "Driving", "Working", "Working", "Working", "Working", "Working", "Working", "", "", "Driving", "Cooking", "Watching TV", "Watching TV", "Exercising", "Reading"]
      },
      { "name" : "Exercise",
        "type" : "boolean",
        "options" : [],
        "value" : true
      },
      { "name" : "Money Spent",
        "type" : "count",
        "options" : [],
        "value" : 33
      }
      ];
    }

    return (
      <div>
        <style>{`
          .tracker-grid {
            color: white;
            display: grid;
            grid-auto-rows: 180px;
            grid-template-columns: repeat( auto-fit, minmax(180px, 1fr) );
            grid-auto-flow: dense;
            grid-gap: 20px;
            margin-left: 20px;
            margin-right: 20px;
            min-width: 330px;
          }
        `}</style>
        <h1>{requestedDate}</h1>
        <div className="tracker-grid">
          {Object.keys(requestedDatesTrackers).map(function(trackerId){
            const tracker = requestedDatesTrackers[trackerId];
            if (tracker.type === 'pie') {
              return <PieTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                date={props.date}
                defaultInfo = {defaultInfo}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'wordcloud') {
              return <WordCloudTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                date={props.date}
                defaultInfo = {defaultInfo}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'heat') {
              return <HeatTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                date={props.date}
                defaultInfo = {defaultInfo}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'boolean') {
              return <BooleanTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                date={props.date}
                defaultInfo = {defaultInfo}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'count') {
              return <CountTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                date={props.date}
                defaultInfo = {defaultInfo}
                key={trackerId}
                tracker={tracker} />
            } else return (
              <div key={trackerId}>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default TrackersMain;
