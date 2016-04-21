var data = [
  {text: "hi", value: 10},
  {text: "there", value: 20},
  {text: "d3", value: 15}
]

render();
tick();

function render() {
  // TODO select elements
    const update = d3.select("#bind-to-me")
	  .selectAll("li")
	  .data(data);
    
    // TODO handle existing elements

    // TODO update + enter
    
  // TODO handle new elements
    const enter = update
	  .enter()
	  .append("li")

    // update + enter
    update
	.text(d => d.text)
	.style("font-size", d => d.value + "px")
    
    // TODO elements that need to leave
    update.exit()
	.remove()
}

function tick() {
  setInterval(function() {

    if(Math.random() > 0.5) {
      var v = Math.random() * 1000 | 0;
      data.push({
        text: "item " + v,
        value: v
      })
    } else {
      var half = (data.length / 2 | 0);
      d3.shuffle(data);
      data = data.slice(0, half + (Math.random() * half | 0))
    }

    render();

  }, 200);
}
