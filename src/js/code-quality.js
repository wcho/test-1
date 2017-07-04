var memo = {}, arr = ["apple", "lemon", "orange"];
var ret1 = arr.map(function (curval, index) { // ARRAY_CALLBACK_RETURN_MISSING alarm because no value is returned in the callback function.
    memo[curval] = index;
});
console.log(ret1); // 'ret1' is filled with undefined.

var ret2 = Array.from([1, 2, 3], function (x) { // ARRAY_CALLBACK_RETURN_MISSING alarm because no value is returned in the callback function.
    x = x + 3;
});
console.log(ret2); // 'ret2' is filled with undefined.

function foo() {
    bar = 4; // ASSIGN_BEFORE_DECL alarm
    var bar;
    console.log(bar);
}
foo();

// Example 1
a = a; // ASSIGN_SAME_VALUE alarm

// Example 2
a = b;
a = b; // ASSIGN_SAME_VALUE alarm

// Example 3
r = a;
a = b;
b = a; // ASSIGN_SAME_VALUE alarm

const instance = ReactDOM.render(<App />, rootElement);
foo(instance); // ASYNC_RENDER_RETURN_VALUE alarm

function foo(v, obj) {
    with (obj) { // BAD_WITH_STATEMENT alarm
        v = "ambiguous"; // It is hard to know whether 'v' is a property of 'obj' or the first argument of function 'foo'.
    }
}

// Example 1
if (y) {
    x = 42;
} else {
    x = 42;
}
if (x > 0) { // CONSTANT_CONDITION alarm: Condition 'x > 0' is always satisfied at this point.
    console.log(x);
}

// Example 2
if (y) {
    x = 42;
} else {
    x = 42;
}
switch (x) {
    case 0: z = 0; break;
    case 42: z = 1; break; // CONSTANT_CONDITION alarm: This switch case is always matched.
}

// Example 3
if (x) {
    if (x != null) { // CONSTANT_CONDITION alarm: Condition 'x != null' is always satisfied because it is redundant with the above condition 'x'.
        console.log(x.p);
    }
}

// Example 4
if (x < 0) {
    if (x < 42) {
        console.log('x is between 0 and 42'); // CONSTANT_CONDITION alarm: Condition 'x < 42' is always satisfied at this point because it is redundant because it is redundant with the above condition 'x < 0'.
    }
}

// Example 5
function foo(x, y) {
    var arr = [];
    if (x) arr.push(x);
    if (y) arr.push(y);
    if (arr) { // CONSTANT_CONDITION alarm: Condition 'arr' is always satisfied at this point because it is an array. Did you mean 'arr.length' instead?
        console.log(arr.join(", "));
    }
}

function a() { return 1; }
function a(b) { return b; } // DUPLICATE_DECL alarm

var foo;
var foo; // DUPLICATE_DECL alarm

if (foo) { // EMPTY_BLOCK alarm because empty block is used as if branch.
}

var array = ['foo', 'bar'];
// FORIN_ARRAY alarm
for (var obj in array)
    console.log('item: ' + obj); // Result: 'item: 0', 'item: 1' (not as expected 'item: foo', 'item: bar')
    
    // Example 1
if (x >= 0) { // IDENTICAL_BRANCHES alarm
    y = x;
} else {
    y = x;
}

// Example 2
y = x >= 0 ? x : x; // IDENTICAL_BRANCHES alarm

reject('Create badge failed: '. err); // MISSING_COMMA alarm

import React from 'react';

class Hello extends React.Component {
    render() {
        var childs = this.props.greetings.map((greeting) => <li value={greeting.name}>{greeting.name}</li>); // MISSING_KEY_PROP alarm

        return (
            <ul>
                {childs}
            </ul>
        );
    }
}

// Example 1
if (x) {
    diff = x - y;
} else {
    x = y;
    diff = x - y; // SAME_OPERAND_VALUE alarm. The result is always 0.
}

// Example 2
if (value > maxValue) {
    value = maxValue;
    diff = value - maxValue; // SAME_OPERAND_VALUE alarm. The result is always 0.
}

switch (foo) {
case 1: // SWITCH_CASE_FALL_THROUGH alarm
    doSomething(1);
case 2:
    doSomething(2);
}

function add(x, y) {
    return x + y;
}
var sum = add(1, 2, 3); // TOO_MANY_ARGS alarm because 'add' function takes only 2 arguments.

// Example 1
var b = [1, 2, 3];
for (a = 0 /* UNEXPECTED_GLOBAL_DECL alarm */; a < b.length; a++) {}

// Example 2
var c = 1,
    d = 2
    e = 3, // UNEXPECTED_GLOBAL_DECL alarm
    f = 4; // UNEXPECTED_GLOBAL_DECL alarm
    
    function foo() {
    function unusedFunction() { // UNUSED_DECL alarm because local variable 'unusedFunction' is not used.
    }
    var bar = 1;
    var unused_var; // UNUSED_DECL alarm because local variable 'unused_var' is not used.
    doSomething(bar);
}

function doSomethinng(bar) {
}

// Example 1
function f(x) {
    x + 1; // UNUSED_EXPR alarm
}

// Example 2
function g(x, y) {
    x.p == y.p; // UNUSED_EXPR alarm
}

import {
    count,
    increment // UNUSED_IMPORT alarm
} from "my-counter";
console.log(count);

let init = require("initialize"); // UNUSED_REQUIRE alarm
let foo = require("foo"); // UNUSED_REQUIRE alarm
module.exports = function () { }

function foo(url) {
    var target = url + "user" + user; // UNUSED_VAR_ASSIGN alarm
    target = url.replace(/\.|\?|\&|\/|\=|\:|\-|\s/gi, "");
}

import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

Hello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number // USELESS_PROP_TYPES alarm because this property 'age' is not used.
};
