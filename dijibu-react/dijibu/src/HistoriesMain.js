import React from 'react';
import History from './History';

function HistoriesMain(props) {

  function parsePieData(name) {
    let options = props.dates[props.dates.length-1].trackers.find(function(element) {
      if (element.type === "pie" && element.name === name) {
        return element;
      }
    }).options;
    let colorsOptions = ["#DA6257", "#092e46", "#738678", "#e99259", "#f6d1b9", "#d7d7d7"];
    let dict = {};
    options.forEach((key, i) => dict[key] = colorsOptions[i]);
    let labels = [];
    let colors = [];
    for(let i=props.dates.length - 1; i>=props.dates.length - 8; i--) {
      if(i <  0) {
        break;
      } else {
        let possibleElement = props.dates[i].trackers.find(function(element) {
          if (element.type === "pie" && element.name === name) {
            return element;
          }
        }).value;
        if (typeof possibleElement !== "undefined") {
          labels.push(possibleElement);
          colors.push(dict[possibleElement]);
        }
      }
    }
    return {
      labels: labels,
      colors: colors
    }
  }

  function makePieChart(name) {
    let parse = parsePieData(name);
    let labels = parse.labels;
    let colors = parse.colors;
    return(
      { type: "pie",
        name: name,
        dataValues: [{
          values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
          labels: labels,
          type: 'pie',
          marker: {
            colors: colors
          },
          sort: false,
          textinfo: 'none'
        }],
        layout: {
          height: 500,
          width: 600,
          margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20}
        }
      }
    );
  }

  function parseBooleanData(name) {
    let labels = [];
    let colors = [];
    for(let i=props.dates.length - 1; i>=props.dates.length - 8; i--) {
      if(i <  0) {
        break;
      } else {
        let possibleElement = props.dates[i].trackers.find(function(element) {
          if (element.type === "boolean" && element.name === name) {
            return element;
          }
        }).value;
        if (typeof possibleElement !== "undefined") {
          let colorResult = "#FFFFFF";
          if (possibleElement) {
            colorResult = "#F6D1B9";
          }
          labels.push(props.dates[i].date);
          colors.push(colorResult);
        }
      }
    }
    return {
      labels: labels,
      colors: colors
    }
  }

  function makeBooleanChart(name) {
    let parse = parseBooleanData(name);
    let labels = parse.labels;
    let colors = parse.colors;
    return(
      { type: "boolean",
        name: "Exercise",
        dataValues: [{
          values: [14.285, 14.285, 14.285, 14.285, 14.285, 14.285, 14.285],
          labels: labels,
          type: "pie",
          marker: {
            colors: colors
          },
          sort: false,
          hole: 0.85,
          textinfo: "none"
        }],
        layout: {
          height: 550,
          width: 600,
          margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20
          },
          showlegend: false
        }
      }
    );
  }

  function makeHistories() {
    let histories = [];
    let lastDay = props.dates[props.dates.length -1].trackers;
    for(let i=0; i< lastDay.length; i++) {
      if (lastDay[i].type === "pie") {
        histories.push(makePieChart(lastDay[i].name));
      } else if (lastDay[i].type === "wordcloud") {

      } else if (lastDay[i].type === "heat") {

      } else if (lastDay[i].type === "boolean") {
        histories.push(makeBooleanChart(lastDay[i].name));
      } else if (lastDay[i].type === "count") {

      }
    }
    return histories;
  }

  let histories = makeHistories();

  return (
    <div>
      <h1>Tracker Histories</h1>
      {Object.keys(histories).map(function(historyId){
        const history = histories[historyId];
        return <History
          historyId={historyId}
          key={historyId}
          history={history} />
      })}
    </div>
  );
}

export default HistoriesMain;
