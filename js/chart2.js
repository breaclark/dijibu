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
          {"text": "popsicle", "size": 30, "color": "#DA6257"},
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
