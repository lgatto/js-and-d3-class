/* TODO in the below scenarios, give the value
 * of a returned from the function. e.g if you think
 * scenarioone returns "apple", then
 *
 *   answers.scenarioone = "apple";
 *
 * think it through each time. come up with a
 * reasoned argument for 'a' being a certain
 * value in terms of:
 *
 * - order of execution
 * - function scope
 * - block scope
 *
 * just guessing until it works won't help you learn it!
 *
 * if you think the scenario returns nothing, or will
 * throw an error, return nothing (null/undefined or no return)
 *
 * only modify code inside 'exports'
 */

// config for exercises
/* eslint no-unused-vars:0 no-unreachable:0 */

const answers = {};

function scenarioone() {
  // hoisting zone: a: undefined
  var a = 'scenario';
  inner();

  return a;

  function inner() {
    // innerscope: {}
    a = 'inner';
  }
}

answers.scenarioone = 'inner';

function scenariotwo() {

  var a = 'out';
  inner();

  // scope: {a: 'out'}
  return a;

  function inner() {
    var a = 'inner';
    // scope: {A: 'inner'}
  }

}

ANSWERS.scenarioTwo = 'out';

function scenarioThree() {
  var A = 'outer';

  inner();

  return A;

  function inner() {
    helper();

    return;

    function helper() {
      A = 'helper';
    }

    A = 'inner'; // never reached
  }

}

ANSWERS.scenarioThree = 'helper';

function scenarioFour() {
  const A = 'outer'; // can't be changed

  {
    let A = 'inner';
  }

  return A;

}

ANSWERS.scenarioFour = 'outer';

function scenarioFive() {
  let A = 'outer';

  {
    let A = 'inner';
    return A; // return from function, not block
  }

  A = 'outer';
  return A;
}

ANSWERS.scenarioFive = 'inner';

function scenarioSix() {
  var A;
  loop();

  return A;

  function loop() {
    for (A = 0; A < 10; A++) {
      A;
    }
  }
}

ANSWERS.scenarioSix = 10;

function scenarioSeven() {

  let A;
  let B = 5;

  {
    for (B = 0; B < 10; B++) {
      console.log(A);
      inner();
      if (B > 5) {
        A = B;
        return A;
      }

      inner();
      A = B;
    }

    return A;
  }

  return A;

  function inner(A, B) {
    // A and B undefined
    B = 100;
    A = 'inner';
  }
}

ANSWERS.scenarioSeven = 6;















// ignore this :)

export { ANSWERS };
[scenarioOne,
  scenarioTwo, scenarioThree, scenarioFour,
  scenarioFive, scenarioSix, scenarioSeven,
].forEach(function (s) {
  exports[s.name] = s;
});
