import React from 'react';
import Plot from 'react-plotly.js';
import WordCloud from 'react-d3-cloud';

function History(props) {

  let historyContent;
  if (props.type === "wordcloud") {
    // const fontSizeMapper = word => Math.log2(word.value) * 5;
    // historyContent =  <WordCloud
    //   data={ props.dataValues }
    //   fontSizeMapper={fontSizeMapper} />
  } else {
    historyContent = <Plot
      data={ props.dataValues }
    layout={ props.layoutValues }
      />
  }
  return (
    <div>
      {historyContent}
    <h1>{props.name}</h1>
    </div>
  );
}

export default History;
