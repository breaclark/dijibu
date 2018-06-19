// Chart 1
//Plotly

let data = [{
  values: [38, 11, 13, 4, 28, 6],
  labels: ["Part 1", "Part 2", "Part 3", "Part 4", "Part 5", "Part 6"],
  type: "pie",
  marker: {
    colors: ["#F6D1B9", "#092E46", "#D7D7D7", "#092E46", "#738678", "#092E46"]
  },
  sort: false
}];

let layout = {
  height: 400,
  width: 500
};

Plotly.newPlot("chart1", data, layout);

// Chart 2
// Chart 2 wordcloud is heavily borrowed from http://bl.ocks.org/ericcoopey/6382449
// This will change when I add in actual data and do this in react

let words =[{"text": "word", "size": 50, "color": "#F6D1B9"},
          {"text": "quick", "size": 30, "color": "#738678"},
          {"text": "brown", "size": 120, "color": "#F6D1B9"},
          {"text": "fox", "size": 30, "color": "#DA6257"},
          {"text": "jumped", "size": 160, "color": "#E99259"},
          {"text": "over", "size":40, "color": "#092E46"},
          {"text": "the", "size": 80, "color": "#738678"},
          {"text": "lazy", "size": 130, "color": "#DA6257"},
          {"text": "dog", "size": 90, "color": "#092E46"},
          {"text": "and", "size": 20, "color": "#F6D1B9"},
          {"text": "juxtapose", "size": 130, "color": "#092E46"},
          {"text": "wonder", "size": 100, "color": "#E99259"},
          {"text": "popscicle", "size": 30, "color": "#DA6257"},
          {"text": "everything", "size": 70, "color": "#D7D7D7"}]

d3.layout.cloud()
        .size([800, 300])
        .words(words)
        .rotate(0)
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

function draw(words) {
    d3.select("#chart2").append("svg")
            .attr("width", 900)
            .attr("height", 400)
            .append("g")
            .attr("transform", "translate(320,200)")
            .selectAll("text")
            .data(words)
            .enter()
            .append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("fill", function(d) { return d.color; })
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")";
            })
            .text(function(d) { return d.text; });
}

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

// Chart 4
// This one is from here: https://github.com/prcweb/d3-circularheat
// See if you can use more colors

let chart = circularHeatChart()
    .range(["#F6D1B9", "#092E46"])
    .innerRadius(20)
    .radialLabels(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    .segmentLabels(["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am",
    "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]);
let data4 = [];
for(let i=0; i<168; i++) data4[i] = Math.random();

d3.select('#chart4')
    .selectAll('svg')
    .data([data4])
    .enter()
    .append('svg')
    .attr("width", 900)
    .attr("height", 600)
    .call(chart);

// Chart 5
// This might be better as a very thin donut chart. So if you did well, unbroken line

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
  height: 400,
  width: 500,
  showlegend: false
};

Plotly.newPlot("chart5", data5, layout5);
