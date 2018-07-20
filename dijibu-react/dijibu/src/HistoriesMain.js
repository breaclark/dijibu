import React from 'react';
import History from './History';

function HistoriesMain(props) {
    return (
      <div>
        <h1>Tracker Histories</h1>
        <History
        dataValues={props.dataValues1}
        layoutValues={props.layoutValues1}
        historyName="Tracker 1"/>
        <History historyName="Tracker 2"/>
        <History
        dataValues={props.dataValues3}
        layoutValues={props.layoutValues3}
        historyName="Tracker 3"/>
        <History
        dataValues={props.dataValues4}
        layoutValues={props.layoutValues4}
        historyName="Tracker 4"/>
        <History
        dataValues={props.dataValues5}
        layoutValues={props.layoutValues5}
        historyName="Tracker 5"/>
      </div>
    );
}

export default HistoriesMain;
