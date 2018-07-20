import React from 'react';
import Plot from 'react-plotly.js';
import WordCloud from 'react-d3-cloud';
import { select } from 'd3-selection';
import { circularHeatChart } from './circularHeatChart.js';

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

  let chartArea;
  let chart = circularHeatChart()
      .range(["#F6D1B9", "#092E46"])
      .innerRadius(20);

  let data4 = [];
  for(let i=0; i<168; i++) data4[i] = Math.random();
  select(chartArea)
      .selectAll('svg')
      .data([data4])
      .enter()
      .append('svg')
      .attr("width", 600)
      .attr("height", 600)
      .call(chart);

    return (
      <div>
        <Plot
          data={[
            props.dataValues
          ]}
        layout={ props.layoutValues }
          />
        <WordCloud
          data={data}
          fontSizeMapper={fontSizeMapper}
        />
      <svg ref={chartArea => chartArea = chartArea}
      width={600} height={600}>
      </svg>
        <h1>{props.historyName}</h1>
      </div>
    );
}

export default History;
