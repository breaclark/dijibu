import React from 'react';
import Plot from 'react-plotly.js';

function History(props) {

    return (
      <div>
        <Plot
          data={[
            props.dataValues
          ]}
        layout={ props.layoutValues }
          />
        <h1>{props.historyName}</h1>
      </div>
    );
}

export default History;
