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
