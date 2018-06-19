// Chart 2
// Chart 2 wordcloud is heavily borrowed from http://bl.ocks.org/ericcoopey/6382449
// This will change when I add in actual data and do this in react

let words =[{"text": "word", "size": 15, "color": "#F6D1B9"},
          {"text": "quick", "size": 13, "color": "#738678"},
          {"text": "brown", "size": 12, "color": "#F6D1B9"},
          {"text": "fox", "size": 13, "color": "#DA6257"},
          {"text": "jumped", "size": 16, "color": "#E99259"},
          {"text": "over", "size":14, "color": "#092E46"},
          {"text": "the", "size": 18, "color": "#738678"},
          {"text": "lazy", "size": 13, "color": "#DA6257"},
          {"text": "dog", "size": 19, "color": "#092E46"},
          {"text": "and", "size": 12, "color": "#F6D1B9"},
          {"text": "juxtapose", "size": 13, "color": "#092E46"},
          {"text": "wonder", "size": 10, "color": "#E99259"},
          {"text": "popsicle", "size": 13, "color": "#DA6257"},
          {"text": "everything", "size": 17, "color": "#D7D7D7"}]

d3.layout.cloud()
        .size([300, 200])
        .words(words)
        .rotate(0)
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

function draw(words) {
    d3.select("#chart2").append("svg")
            .attr("width", 400)
            .attr("height", 300)
            .append("g")
            .attr("transform", "translate(120,50)")
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
