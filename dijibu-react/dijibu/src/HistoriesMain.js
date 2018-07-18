import React from 'react';
import History from './History';

function HistoriesMain() {
    return (
      <div>
        <h1>Tracker Histories</h1>
        <History historyName="Tracker 1"/>
        <History historyName="Tracker 2"/>
        <History historyName="Tracker 3"/>
        <History historyName="Tracker 4"/>
      </div>
    );
}

export default HistoriesMain;
