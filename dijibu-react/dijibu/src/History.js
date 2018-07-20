import React from 'react';
import Plot from 'react-plotly.js';
import WordCloud from 'react-d3-cloud';

function History(props) {
  const data = [
  { text: "word", value: 25 },
  { text: "quick", value: 43 },
  { text: "brown", value: 42 },
  { text: "fox", value: 13 },
  { text: "jumped", value: 16 },
  { text: "over", value: 14 },
  { text: "the", value: 28 },
  { text: "lazy", value: 33 }
  ];

  const fontSizeMapper = word => Math.log2(word.value) * 5;

    return (
      <div>
        <Plot
          data={[
            props.dataValues2,
            props.dataValues
          ]}
        layout={ props.layoutValues }
          />
        <WordCloud
          data={data}
          fontSizeMapper={fontSizeMapper}
        />
        <h1>{props.historyName}</h1>
      </div>
    );
}

export default History;
