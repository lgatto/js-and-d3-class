
var data = [
    { color: "red" },
    { color: "green" },
    { color: "blue" },
  ];

// TODO select circles, bind data
var circle = d3.select("svg")
    .selectAll("circle")
    .on("mousemove", onmove)
    .on("mouseout", onout);

  // TODO make 'onmove' handler for for `mousemove` event
  // TODO make 'onout' handler for for `mouseout` event


function onmove(d, i) {
    // TODO change the fill of current element
    d3.select(this)
	.style("fill", "red")
	.attr("cx", 0)
}

