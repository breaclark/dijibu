import React from 'react';
import History from './History';
import dateFns from "date-fns";

function HistoriesMain(props) {

  let dates = Object.entries(props.dates);

  function parsePieData(name) {
    let options = dates[dates.length-1][1].trackers.find(function(element) {
      if (element.type === "pie" && element.name === name) {
        return element;
      }
      return false;
    }).options;
    let colorsOptions = ["#DA6257", "#092e46", "#738678", "#e99259", "#f6d1b9", "#d7d7d7", "ffffff"];
    let dict = {};
    options.forEach((key, i) => dict[key] = colorsOptions[i]);
    let labels = [];
    let colors = [];
    for(let i=dates.length - 1; i>=dates.length - 7; i--) {
      if(i <  0) {
        break;
      } else {
        let possibleElement = dates[i][1].trackers.find(function(element) {
          if (element.type === "pie" && element.name === name) {
            return element;
          }
          return false;
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
    for(let i=dates.length - 1; i>=dates.length - 7; i--) {
      if(i <  0) {
        break;
      } else {
        let possibleElement = dates[i][1].trackers.find(function(element) {
          if (element.type === "boolean" && element.name === name) {
            return element;
          }
          return false;
        }).value;
        if (typeof possibleElement !== "undefined") {
          let colorResult = "#FFFFFF";
          if (possibleElement) {
            colorResult = "#F6D1B9";
          }
          labels.push(dateFns.format(dates[i][1].date, 'MM/DD/YY'));
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

  function parseCountData(name) {
    let theta = [];
    let r = [];
    for(let i=dates.length - 1; i>=dates.length - 7; i--) {
      if(i <  0) {
        break;
      } else {
        let possibleElement = dates[i][1].trackers.find(function(element) {
          if (element.type === "count" && element.name === name) {
            return element;
          }
          return false;
        }).value;
        if (typeof possibleElement !== "undefined") {
          theta.push(dateFns.format(dates[i][1].date, 'MM/DD/YY'));
          r.push(possibleElement);
        }
      }
    }
    return {
      theta: theta,
      r: r
    }
  }

  function makeCountChart(name) {
    let parse = parseCountData(name);
    let theta = parse.theta;
    let r = parse.r;
    return(
      { type: "count",
        name: "Money Spent",
        dataValues: [{
          type: "scatterpolar",
          r: r,
          theta: theta,
          fill: "toself",
          connectgaps: true,
          fillcolor: "rgba(246, 209, 185, 0.5)",
          line: {
            color: "#DA6257"
          }
        }],
        layout: {
          polar: {
            radialaxis: {
              color: "#DA6257",
              visible: true,
              angle: 90,
              linecolor: "#D7D7D7",
              gridcolor: "#D7D7D7",
              nticks: 3,
              tickangle: 90
            },
            angularaxis: {
              color: "#D7D7D7",
              direction: "clockwise"
            }
          },
          height: 550,
          width: 520,
          margin: {
            l: 60,
            r: 40,
            b: 20,
            t: 20
          },
          showlegend: false
        }
      }
    );
  }

  function parseHeatData(name) {
    let options = dates[dates.length-1][1].trackers.find(function(element) {
      if (element.type === "heat" && element.name === name) {
        return element;
      }
      return false;
    }).options;
    let colorsOptions = ["#ffffff", "#DA6257", "#092e46", "#738678", "#e99259", "#f6d1b9", "#d7d7d7", "#c9e6d1", "#0f527d"];
    let dict = {};
    options.forEach((key, i) => dict[key] = colorsOptions[i]);
    let labels = [];
    let colors = [];
    let names = [];
    for(let i=dates.length - 1; i>=dates.length - 7; i--) {
      let labelsSingle = [];
      let colorsSingle = [];
      if(i <  0) {
        break;
      } else {
        let possibleElement = dates[i][1].trackers.find(function(element) {
          if (element.type === "heat" && element.name === name) {
            return element;
          }
          return false;
        }).value;
        if (typeof possibleElement !== "undefined") {
          names.push(dateFns.format(dates[i][1].date, 'MM/DD/YY'));
          for (let i=0; i<possibleElement.length; i++) {
            labelsSingle.push(possibleElement[i]);
            colorsSingle.push(dict[possibleElement[i]]);
          }
        }
      }
      labels.push(labelsSingle);
      colors.push(colorsSingle);
    }
    return {
      names: names,
      labels: labels,
      colors: colors
    }
  }

  function makeHeatChart(name) {
    let parse = parseHeatData(name);
    let labels = parse.labels;
    let colors = parse.colors;
    let names = parse.names;
    let dataValues = [];
    for (let i=0; i< labels.length; i++) {
      dataValues.push({
        values: [4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666, 4.1666],
        name: names[i],
        labels: labels[i],
        type: "pie",
        marker: {
          colors: colors[i]
        },
        sort: false,
        hole: (i)*0.14,
        textinfo: "none"
      });
    }
    return(
      { type: "heat",
        name: "Activity",
        dataValues: dataValues,
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

  function frequencyMapFromArray(startArray) {
    let dict = new Map();
    for(let i=0; i< startArray.length; i++) {
      if (dict.has(startArray[i])) {
        dict.set(startArray[i], Number(dict.get(startArray[i])) + 1);
      } else {
        dict.set(startArray[i], 1);
      }
    }
    let dictFormatted = [];
    dict.forEach(function(key, value, map) {
      dictFormatted.push({text: value, value: key});
    });
    return dictFormatted;
  }

  function parseWordCloudData(name) {
    let wordbag = [];
    for(let i=dates.length - 1; i>=dates.length - 7; i--) {
      if(i <  0) {
        break;
      } else {

        let possibleElement = dates[i][1].trackers.find(function(element) {
          if (element.type === "wordcloud" && element.name === name) {
            return element;
          }
          return false;
        }).value;
        possibleElement = Object.values(possibleElement);
        if (typeof possibleElement !== "undefined") {
          wordbag = wordbag.concat(possibleElement);
        }
      }
    }
    let dict = frequencyMapFromArray(wordbag);
    return dict;
  }

  function makeWordCloudChart(name) {
    let dict = parseWordCloudData(name);
    return(
      { type: "wordcloud",
        name: name,
        dataValues: dict
      }
    );
  }

  function makeHistories() {
    let histories = [];
    if(dates.length > 0) {
      let lastDay = dates[dates.length -1][1].trackers;
      for(let i=0; i< lastDay.length; i++) {
        if (lastDay[i].type === "pie") {
          histories.push(makePieChart(lastDay[i].name));
        } else if (lastDay[i].type === "wordcloud") {
          histories.push(makeWordCloudChart(lastDay[i].name));
        } else if (lastDay[i].type === "heat") {
          histories.push(makeHeatChart(lastDay[i].name));
        } else if (lastDay[i].type === "boolean") {
          histories.push(makeBooleanChart(lastDay[i].name));
        } else if (lastDay[i].type === "count") {
          histories.push(makeCountChart(lastDay[i].name));
        }
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
