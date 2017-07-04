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

const A = 1;
A = 2; // BAD_ASSIGN_TO_CONST alarm because A is reserved for constant above.
const MY_OBJECT = {'key': 'value'};
MY_OBJECT = {'oKey': 'otherValue'}; // BAD_ASSIGN_TO_CONST alarm
const MY_ARRAY = [];
MY_ARRAY = ["A"]; // BAD_ASSIGN_TO_CONST alarm

function * foo() {}
new foo(); // CALL_NON_CONSTRUCTOR alarm

var bar = () => {};
new bar(); // CALL_NON_CONSTRUCTOR alarm

var a = new Symbol(); // CALL_NON_CONSTRUCTOR alarm

function foo() {
    console.log(v1); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    let v1 = 2;

    v2 = 1; // REFERENCE_BEFORE_LEXICAL_DECL alarm
    const v2 = 3;

    new A(); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    class A {};
}

function foo() {
    console.log(v1); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    let v1 = 2;

    v2 = 1; // REFERENCE_BEFORE_LEXICAL_DECL alarm
    const v2 = 3;

    new A(); // REFERENCE_BEFORE_LEXICAL_DECL alarm
    class A {};
}

import {
    count,
    increment // UNUSED_IMPORT alarm
} from "my-counter";
console.log(count);
