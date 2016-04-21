var data = [
	{id: 0, name: "Apple"},
	{id: 1, name: "Pear"},
	{id: 2, name: "Banana"}
];

// this is called when you click 'jumble'
function updateUi() {
	
    d3.shuffle(data);
    console.log(JSON.stringify(data));
	
    // TODO select fruit and bind all data
    var update = d3.select("#fruit")
    	.selectAll("li")
	.data(data, d => d.id); // .data(data); // no transition, just rewrite
		
    // TODO create els
    const enter = update.enter()
	  .append("li")
    
    // TODO set top based on index
    update
	.text((d,i)  => `${d.name} ${i}`)
	.style("top", (d, i) => {
	    return i * 25 + "px"
	})
}

updateUi();
