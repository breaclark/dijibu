// Chart 5
// Plotly

let data5 = [{
  values: [14.285, 14.285, 14.285, 14.285, 14.285, 14.285, 14.285],
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  type: "pie",
  marker: {
    colors: ["#F6D1B9", "#FFFFFF", "#F6D1B9", "#F6D1B9", "#F6D1B9", "#FFFFFF", "#F6D1B9"]
  },
  sort: false,
  hole: 0.85,
  textinfo: "none"
}];

let layout5 = {
  height: 250,
  width: 300,
  margin: {
    l: 20,
    r: 20,
    b: 20,
    t: 20
  },
  showlegend: false
};

Plotly.newPlot("chart5", data5, layout5);
