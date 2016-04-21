// TODO function passed to incoming will be called
// a number of times with different event strings
//
// return the number of times an event has been
// called on each event
//
//
// try ES5 and ES6 implementations
//
export function getCount(incoming) {

    const counts = new Map();
    
    // declare structure
    incoming((event) => {
	if (counts.get(event) == null) {
	    counts.set(event, 0)
	}

	counts.set(event, counts.get(event) + 1);

	console.log(event, counts.get(event));
	
	return counts.get(event);

    });

};

// TODO function passed to incoming will be called
// a number of times with different event/ip combinations
//
// return the unique set of IPs for each event on each event,
// as maps or arrays
//
// try ES5 and ES6 implementations
//
export function getIpSets(incoming) {

    incoming((event, ip) => {
	console.log(event, ip)
	// TODO
	return [];
    });
};

