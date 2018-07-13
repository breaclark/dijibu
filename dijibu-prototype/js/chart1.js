// Chart 1
//Plotly

let data = [{
  values: [14.3, 14.3, 14.3, 14.3, 14.3, 14.3, 14.3],
  labels: ["Happy", "Sad", "Anxious", "Sad", "Productive", "Sad", "Happy"],
  type: "pie",
  marker: {
    colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46", "#F6D1B9"]
  },
  sort: false,
  textinfo: "none"
}];

let layout = {
  height: 500,
  width: 600,
  margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 20
  }
};

Plotly.newPlot("chart1", data, layout);
