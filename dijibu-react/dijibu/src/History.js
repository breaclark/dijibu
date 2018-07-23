import React from 'react';
import Plot from 'react-plotly.js';
import WordCloud from 'react-d3-cloud';

function History(props) {

  let historyContent;
  if (props.history.type === "wordcloud") {
    //need to figure out how to make this on color scheme
    const fontSizeMapper = word => Math.log2(word.value + 1) * 15;
    historyContent =  <WordCloud
      data={ props.history.dataValues }
      fontSizeMapper={fontSizeMapper} />
  } else {
    historyContent = <Plot
      data={ props.history.dataValues }
    layout={ props.history.layoutValues } />
  }
  return (
    <div>
      {historyContent}
    <h1>{props.history.name} Tracker</h1>
    </div>
  );
}

export default History;
