const instance = ReactDOM.render(<App />, rootElement);
foo(instance); // ASYNC_RENDER_RETURN_VALUE alarm

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
