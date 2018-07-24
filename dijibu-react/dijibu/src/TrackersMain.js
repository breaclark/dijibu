import React from 'react';
import dateFns from "date-fns";
import PieTracker from './PieTracker';
import WordCloudTracker from './WordCloudTracker';
import HeatTracker from './HeatTracker';
import BooleanTracker from './BooleanTracker';
import CountTracker from './CountTracker';

function TrackersMain(props) {
    let requestedDate = dateFns.format(props.date, 'MMMM D, YYYY');
    let requestedDatesTrackers;
    requestedDatesTrackers = props.dates[props.dateKey].trackers;
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
                datekey ={props.datekey}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'wordcloud') {
              return <WordCloudTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                datekey ={props.datekey}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'heat') {
              return <HeatTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                datekey ={props.datekey}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'boolean') {
              return <BooleanTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                datekey ={props.datekey}
                key={trackerId}
                tracker={tracker} />
            } else if (tracker.type === 'count') {
              return <CountTracker
                trackerChange={props.onTrackerChange}
                trackerId={trackerId}
                datekey ={props.datekey}
                key={trackerId}
                tracker={tracker} />
            } else return (
              <div></div>
            );
          })}
        </div>
      </div>
    );
}

export default TrackersMain;
