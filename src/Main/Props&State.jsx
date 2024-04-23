import React from 'react'


const bool = false;
function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example toggleBoolean={!bool} />
        </div>
    );
};

// What is happening here is several props are being passed to the Example
// component, and rendering each of these props’ values to the screen.

const str1 = "just";

function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em>{props.str}</em></p>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <Example
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
        </div>
    );
};


// In this improvement to the Example component, three props are being passed
// to it: toggleBoolean, math, and str. The toggleBoolean is unchanged, and the
// math prop and the str prop have been added.

//  The math prop is there to show that you can add arithmetic operators and
// numbers inside JSX, and it will be evaluated just like it does in plain
// JavaScript.

//  The str prop is there to show that you can concatenate strings, as well
//  as strings and variables – which is shown by adding string literals of
//  “ another ” and “string” to the str1 variable.


function Dog() { {/*Parent Component */}
  return (
      <Puppy name="Max" bowlShape="square" bowlStatus="full" />
  );
};

function Puppy(props) {  {/* Child Components */}
  return (
      <div>
          {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
      </div>
  );
};

function Bowl(props) { {/*Grandchild component */}
  return (
      <span>
          {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
      </span>
  );
};




// The following code shows a large example of prop drilling and how can it make application large if
// there is no use of context api. The button in this code on click will display an alert message
function Main(props) {
    return <Header msg={props.msg} />;
  };

  function Header(props) {
    return (
      <div style={{ border: "10px solid whitesmoke" }}>
        <h1>Header here</h1>
        <Wrapper msg={props.msg} />
      </div>
    );
  };

  function Wrapper(props) {
    return (
      <div style={{ border: "10px solid lightgray" }}>
        <h2>Wrapper here</h2>
        <Button msg={props.msg} />
      </div>
    );
  };

  function Button(props) {
    return (
      <div style={{ border: "20px solid orange" }}>
        <h3>This is the Button component</h3>
        <button onClick={() => alert(props.msg)}>Click me!</button>
      </div>
    );
  };

  function App() {
    return (
      <Main
        msg="I passed through the Header and the Wrapper and I reached the Button component"
      />
    );
  };

  export default App;


// How props and state differ

// Props and state play different roles in a React component.
// Here's a summary of their differences:

// Props:

// Props (short for properties) are a component's configuration
// and are received from its parent component.
// Props are immutable, meaning that a component cannot change its
// props directly.
// A component is responsible for putting together the props of its child
// components.
// Props are used to pass data from a parent component to its child
// components.
// Props are useful for creating reusable and modular components.

// State:

// State is a built-in object in React that allows a component to
// manage its own data internally.
// State is mutable and can be changed by the component itself.
// State is used to store and manage data that can change over time,
// often in response to user events or other triggers.
// When the state of a component changes, React re-renders the
// component to reflect the updated state.
// State is typically used for managing component-specific data
// and controlling the behavior of the component.



// Stateful vs Stateless components

// Here are the differences between stateful and stateless components:

// Stateful Components: (Use both props and state)

// Also known as class components, stateful components have the ability to
// manage and update their own state.
// They are defined as JavaScript classes that extend the React.Component class.
// Stateful components have a state object that holds data that can change over time.
// They can modify their state using the setState() method, which triggers
// a re-render of the component.
// Stateful components are responsible for handling complex logic, data
// fetching, and managing the state of child components.
// They are typically used for components that require user interaction,
// data manipulation, or server communication.

// Stateless Components: (Use props only)

// Also known as functional components, stateless components do not manage their own state.
// They are defined as JavaScript functions that return JSX.
// Stateless components receive data and behavior through props passed down
// from their parent components.
// They focus on presenting the UI based on the received props and do not
// modify the data they receive.
// Stateless components are simpler and easier to understand, test, and maintain.
// They are typically used for presentational components that only render
// UI based on the provided props.