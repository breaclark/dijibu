// Chart 4
// This one is from here: https://github.com/prcweb/d3-circularheat
// See if you can use more colors

let chart = circularHeatChart()
    .range(["#F6D1B9", "#092E46"])
    .innerRadius(20);
    // .segmentLabels(["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    // "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]);
let data4 = [];
for(let i=0; i<168; i++) data4[i] = Math.random();

d3.select('#chart4')
    .selectAll('svg')
    .data([data4])
    .enter()
    .append('svg')
    .attr("width", 400)
    .attr("height", 600)
    .call(chart);
