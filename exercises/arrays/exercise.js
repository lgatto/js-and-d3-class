
// TODO implement the 'dig' function, that looks up
// deeply nested properties. it should be 'safe' - if
// we hit undefined/null we should stop
//
//
//    dig({ a: { b: "hi" } }, "a", "b") // 'hi'
//    dig({ a: { b: "hi" } }, "a") // { b: "hi" }
//    dig({ a: { b: "hi" } }, "z", "z") // undefined
//
// Try first with for of, then with a reduce
//
// @type dig = (object: Object, ...properties: Array<string>) => any
//
/* eslint no-unused-vars:0 */

export { dig };

// reminder: looking up an object property dynamically 
//
// const prop = "hello";
// const object = { hello: 1 };
// console.log(object[prop]); //1

function dig(object, ...props) {
    for (const prop of props) {
	if (object == null) {
	    break;
	}
	object = object[prop];
    }

    return object;
}

function digReduce(object, ...props) {
    return props.reduce((obj, prop) => obj == null ? null : obj[prop],
		       object)
}
