import React from 'react';
import History from './History';

function HistoriesMain(props) {
    return (
      <div>
        <h1>Tracker Histories</h1>
        {Object.keys(props.histories).map(function(historyId){
          const history = props.histories[historyId];
          return <History
            historyId={historyId}
            key={historyId}
            history={history} />
        })}
      </div>
    );
}

export default HistoriesMain;
