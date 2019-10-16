/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding is the result you get when you dont apply any keywords, this will result in an error without 'use strict';.
 * 2. Implicit binding uses dot notation to invoke a function.
 * 3. New binding creates a new object and points to it.
 * 4. Explicit binding uses call(), apply() or bind() on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding


function horse() {
    console.log(this.neigh);
}

var neigh = '🐴';

horse();


// Principle 2

// code example for Implicit Binding

let aboutMe = {
    name: 'Andrew',
    greeting: 'Hello, my name is Andrew',
    me: function () {
        console.log(this.greeting);
    }
}

aboutMe.me();

// Principle 3

// code example for New Binding

function Computer(saying) {
    this.phrase = saying;
}

let myComputer = new Computer('This is a Computer - 🖥');

console.log(myComputer.phrase);

// Principle 4

// code example for Explicit Binding
//call


function hourglass() {
    console.log(this.statement);
}

let timeKeeping = {
    name: 'Sandy',
    statement: 'This is an hourglass - ⌛️'
}

hourglass.call(timeKeeping);