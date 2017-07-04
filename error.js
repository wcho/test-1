class A {
    constructor() {}
}
class B extends A {
    constructor() {
        this.a = 1;
        super(); // ACCESS_THIS_BEFORE_SUPER_CALL alarm
    }
}

new B();

var arr = [1, 2, 3];
if (x < 0) {
    arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}
if (x <= 0) {
    if (x) arr[x] = 3; // ARRAY_INDEX_NEGATIVE alarm: x is negative but is used as array index.
}

function h() {
    'use strict';
    var a = 'str1';
    a.prop = 42; // ASSIGN_TO_PROPERTY_OF_PRIMITIVE alarm because 'a' is a primitive string value.
}

const A = 1;
A = 2; // BAD_ASSIGN_TO_CONST alarm because A is reserved for constant above.
const MY_OBJECT = {'key': 'value'};
MY_OBJECT = {'oKey': 'otherValue'}; // BAD_ASSIGN_TO_CONST alarm
const MY_ARRAY = [];
MY_ARRAY = ["A"]; // BAD_ASSIGN_TO_CONST alarm

// Example 1
var obj = null;
if (obj & obj.prop) { // BAD_BITWISE_OPERATOR alarm
    console.log(obj.prop);
}

// Example 2
options = options | {}; // BAD_BITWISE_OPERATOR alarm

x = str.indexOf(y);
if (x = -1) return "no"; // BAD_ASSIGN_IN_CONDITION alarm. The true branch is always taken and "no" is returned.
else return "yes";

import ReactDOM from 'react-dom';

ReactDOM.render(
    <div dangerouslySetInnerHTML={{ __html: "myHTML" }}>
        <Children /> {/* BAD_DANGER_WITH_CHILDREN alarm */}
    </div>, document.getElementById("root")
);

import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div onClick="console.log('clicked')"> {/* BAD_EVENT_HANDLER alarm */}
                Hello
            </div>
        );
    }
}

import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <a href="http://foo.com" onClick={event => false}> {/* BAD_EVENT_HANDLER_RETURN_FALSE alarm */}
                foo.com
            </a>
        );
    }
}

import React from 'react';

class Foo extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.length && `(${this.props.items.join(', ')})`} {/* BAD_LENGTH_CHECK alarm */}
            </div>
        );
    }
}

import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                /* This is a comment */ {/* BAD_JSX_COMMENT alarm because this text is recognized as a JSX child instead of a comment. */}
                <div>// is a double slash.</div> {/* BAD_JSX_COMMENT alarm because this text in div element is recognized as a JSX child instead of a comment. */}
            </div>
        );
    }
}

x = Math.min(0, Math.max(100, x)); // BAD_MIN_MAX_FUNC alarm. The result is always 0.

// Example 1
if (!x instanceof Array) { // BAD_NEGATION_OPERATOR alarm. The result is always false.
    console.log('x is not array');
}

// Example 2
if (!x.length === 0) { // BAD_NEGATION_OPERATOR alarm. The result is always false.
    console.log('x is not empty');
}

var x = 1234;
var y = (x / 100).indexOf('.'); // BAD_NUMBER_FUNC alarm

var x = 1234;
var y = x.length; // BAD_NUMBER_PROPERTY alarm

// Example 1
"prop" in 42; // BAD_OPERAND_TYPE alarm

// Example 2
function f() {
}
var x = new f();
var b = x instanceof "string"; // BAD_OPERAND_TYPE alarm

var foo = /^abc[]/;

// Example 1
import React from 'react';

class Hello extends React.Component {
    render() {
        <div>Hello</div>; // BAD_RENDER_RETURN_VALUE alarm because 'render()' does not return this React element.
    }
}

// Example 2
class Hello2 extends React.Component {
    render() {
        if (!this.props.myProp) {
            return true; // BAD_RENDER_RETURN_VALUE alarm because 'render()' should return only a React element, null, or false.
        }
        return <div>Hello {this.props.myProp}</div>;
    }
}

import React from 'react';

class Hello extends React.Component {
    getTextStyle() {
        return { color: 'blue' };
    }

    render() {
        return (
            <div>
                <div style="color: 'red'">Text in red</div> {/* BAD_STYLE_PROP alarm because it is a string value. */}
                <div style={this.getTextStyle}>Text in blue</div> {/* BAD_STYLE_PROP alarm because it is a function value. */}
            </div>
        );
    }
}

// Example 1
var cssString = "";
var backPosition;
if (animatedBackground.length === 3) {
    cssString += "backgroundPosition: " + backPosition + "px; "; // BAD_TYPE_COERCION alarm: Expression 'backPosition' has an undefined value and type-coerced to string type.
}

// Example 2
var mod = $index & 1;
if (mod !== old$index & 1) { // BAD_TYPE_COERCION alarm: Expression 'mod !== old$index' has boolean type and type-coerced to number type.
    if (mod === selector) {
        addClass(scope.$eval(attr[name]));
    } else {
        removeClass(scope.$eval(attr[name]));
    }
}

// Example 1
// BAD_TYPEOF_COMPARISON alarm because 'array' is not the possible return value of typeof.
if (typeof x === 'array') { console.log('x is array'); }

// Example 2
// BAD_TYPEOF_COMPARISON alarm because 'udefined' is mistyping of 'undefined'.
var zkPort = typeof portValue === 'udefined' ? '2181' : portValue;

// Example 3
// BAD_TYPEOF_COMPARISON alarm because typeof result is not compared with a string value.
if (typeof x === undefined) { console.log('x is undefined'); }

// Example 4
// BAD_TYPEOF_COMPARISON alarm because typeof result is not compared with a string value.
if (typeof x) { console.log('x is not undefined'); }

// Example 1
React.createClass({
    render() {
        return <div class="hello">Hello</div>; // BAD_UNKNOWN_PROP alarm
    }
});

// Example 2
function handleClick() {}

React.createClass({
    render() {
        return <div onclick={handleClick}>Hello</div>; // BAD_UNKNOWN_PROP alarm
    }
});

// Example 3
React.createClass({
    render() {
        return <div data-X="3">Hello</div>; // BAD_UNKNOWN_PROP alarm
    }
});

import React from 'react';

class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "DeepScan" };
    }
    render() {
        this.setState({ name: this.state.name + " Hello"}); // BAD_UPDATE_STATE alarm because `render()` should be a pure function of props and state.
        return <div>{this.state.name}</div>;
    }
}

// Example 1
function f() {
    var x;
    'use strict'; // BAD_USE_STRICT alarm
}

// Example 2
function g() {
    'use_strict'; // BAD_USE_STRICT alarm
}

function * foo() {}
new foo(); // CALL_NON_CONSTRUCTOR alarm

var bar = () => {};
new bar(); // CALL_NON_CONSTRUCTOR alarm

var a = new Symbol(); // CALL_NON_CONSTRUCTOR alarm

var f = {};
f(); // CALL_NON_FUNC alarm

var x = 10 / 3;
x.toFixed(1) === 3.3; // COMPARE_INCOMPATIBLE_TYPE_STRICTLY alarm because 'toFixed' function returns string type.

var x = undefined + 0;
if (x == NaN) {
    x = 0; // COMPARE_NAN alarm
}

import React from 'react';

class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.handleChanged = this.handleChanged.bind(this);
    }
    handleChanged() {
        this.state = { message: "Hello" }; // DIRECT_ASSIGN_TO_STATE alarm
        alert(this.state.message);
    }
    render() {
        return (
            <button onClick={this.handleChanged}> Click! </button>
        );
    }
}

switch (x) {
case '1':
    e += 'case';
    break;
case '1': // DUPLICATE_CASE alarm
    e += 'another case';
    break;
}

// Example 1
var obj = {
    a: 42,
    get a() { // DUPLICATE_PROPERTY alarm
        return 43;
    }
};

// Example 2
var grid = {
    rowNum: $('#pageSize').val(),
    rowNum: 15 // DUPLICATE_PROPERTY alarm
}

// Example 3
var x = "getValue";
class A {
    getValue() {}
    [x]() {}  // DUPLICATE_PROPERTY alarm
}

import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "John" };
    }

    handleClick() {
        this.setState({ name: "Mary" }); // 'this' has undefined value.
    }

    render() {
        return (
            <div onClick={this.handleClick}> {/* EVENT_HANDLER_INVALID_THIS alarm because 'this.handleClick' function is not bound with 'this'. */}
                {this.state.name}
            </div>
        );
    }
}

// Example 1
function foo(x) {
    x.p = 42;
    if (x != null) { // INSUFFICIENT_NULL_CHECK alarm
    }
}

// Example 2
function foo(x) {
    if (x != null) { // INSUFFICIENT_NULL_CHECK alarm
    }
    y = x.p;
}

// Example 3
function foo(cb) {
    cb();
    if (cb != null) { // INSUFFICIENT_NULL_CHECK alarm
    }
}

var y = Math.atan2(a/b); // MISMATCHED_COUNT_OF_ARGS alarm

function add(x, y) {
    x + y;
}
var sum = add(1, 2); // MISSING_RETURN_VALUE alarm because function 'add' does not return a value.

class A {}
class B extends A {
    constructor() { // MISSING_SUPER_CALL alarm
        var a = 1;
    }
}

new B();

if (x === null) {
    new Error("x should not be null"); // MISSING_THROW alarm
}

var s = 'foobar';
s.substring(0, 3); // NO_EFFECT_CALL alarm because the return value of 'substring' is not used.

function f() {
    return 42;
}
if (f() = 42) { // NON_REFERENCE_LHS alarm
    good = true;
}

// Example 1
function foo() {
    var obj;
    var y = obj.x; // NULL_POINTER alarm
}

// Example 2
if (x == null) { // (x == null) should be modified to (x != null).
    y = x.a; // NULL_POINTER alarm: x is undefined or null but is property-accessed.
}

// Example 3
y = x || x.a; // NULL_POINTER alarm: x has a falsy value but is property-accessed.

// Example 1
function foo() {
    var obj;
    var y = obj.x; // NULL_POINTER alarm
}

// Example 2
if (x == null) { // (x == null) should be modified to (x != null).
    y = x.a; // NULL_POINTER alarm: x is undefined or null but is property-accessed.
}

// Example 3
y = x || x.a; // NULL_POINTER alarm: x has a falsy value but is property-accessed.

var x = 42;
var s_radix_64 = x.toString(64); // NUMBER_ARG_OUT_OF_RANGE alarm

import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
    componentWillmount() { // REACT_API_TYPO alarm because `componentWillMount` is a correct name of the lifecycle method.
        this.state = {
            greetName: this.props.greetName
        };
    }
    render() {
        return (<div>{this.state.greetName}</div>);
    }
}

Hello.PropTypes = { // REACT_API_TYPO alarm because `propTypes` is a correct name of the component's class.
    greetName: PropTypes.string
};

function foo() {
    console.log(v1); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    let v1 = 2;

    v2 = 1; // REFERENCE_BEFORE_LEXICAL_DECL alarm
    const v2 = 3;

    new A(); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    class A {};
}

switch (x) {
case 0:
    if (y == 0); break; // STRAY_SEMICOLON alarm
case 1:
    ...
}
while (++x <= 10) ; // STRAY_SEMICOLON alarm
{
    sum += x;
}

setTimeout(function () {
    'use strict';
    setTimeout(arguments.callee, 100); // STRICT_MODE_ARGS_CALLER_CALLEE alarm
}, 100);

// Example 1
import {A} from 'a';
A = 1; // STRICT_MODE_ASSIGN_TO_READONLY_VAR alarm because it is module code

// Example 2
'use strict';
undefined = 1; // STRICT_MODE_ASSIGN_TO_READONLY_VAR alarm
NaN = 2; // STRICT_MODE_ASSIGN_TO_READONLY_VAR alarm
Infinity = 3; // STRICT_MODE_ASSIGN_TO_READONLY_VAR alarm

function f() {
    'use strict';
}
f.caller; // STRICT_MODE_FUNC_PROPERTY alarm
f.arguments; // STRICT_MODE_FUNC_PROPERTY alarm
f.arguments = 1; // STRICT_MODE_FUNC_PROPERTY alarm

function f() { // STRICT_MODE_INVALID_THIS alarm
    'use strict';
    this.a = 1; // TypeError because this is undefined
}
f();

function b() { // STRICT_MODE_INVALID_THIS alarm
    'use strict';
    this.a = 1; // TypeError because this is null
}
b.call(null);

var s = '42';
// SWITCH_CASE_INCOMPATIBLE_TYPE alarm
switch (s) {
case 0:
case 42:
    matched = true;
    break;
}

// Example 1
varr x; // SYNTAX_ERROR alarm

// Example 2
var regexp = /?/g; // SYNTAX_ERROR alarm

function foo() {
    var x;
    clearTimeout(x); // UNINITIALIZED_LOCAL_VAR alarm
}

function foo() {
    return;

    // UNREACHABLE_CODE alarm
    var bar = 1;
}
