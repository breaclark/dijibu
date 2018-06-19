// Chart 3
// Chart 3 is plotly using d3 radar chart
// See if you can make it more minimal but just as informative

data3 = [{
  type: "scatterpolar",
  r: [33, 80, 98, 8, 120, 57, 139, 33],
  theta: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  fill: "toself",
  connectgaps: true,
  fillcolor: "rgba(246, 209, 185, 0.5)",
  line: {
    color: "#DA6257"
  }
}]

layout3 = {
  polar: {
    radialaxis: {
      color: "#DA6257",
      visible: true,
      angle: 90
    }
  },
  showlegend: false
}

Plotly.newPlot("chart3", data3, layout3)
