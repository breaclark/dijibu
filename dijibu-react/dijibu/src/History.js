import React from 'react';
import Plot from 'react-plotly.js';

function History(props) {
    return (
      <div>
        <Plot
          data={
          {
            values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
            labels: ["Happy", "Sad", "Anxious", "Sad", "Productive", "Sad", "Happy"],
            type: "pie",
            marker: {
              colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
            },
            sort: false,
            textinfo: "none"
          }
        }
        layout={ {
        height: 500,
        width: 600,
        margin: {
          l: 20,
          r: 20,
          b: 20,
          t: 20} } }
          />
        <h1>{props.historyName}</h1>
      </div>
    );
}

export default History;
