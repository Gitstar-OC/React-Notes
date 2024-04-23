// Rules of using hooks 
// You should only call hooks from a React component function.
// You should only call hooks at the top level of a React component function.
// You are allowed to call multiple state hooks or effect hooks inside a component.
// Always make these multiple hook calls in the same sequence.



// Below is the definition of impure function and pure function

// Pure functions:
// Pure functions are functions that always produce the same output for the
// same input, and they don't have any side effects.
// They only depend on their input parameters and don't modify any external state
// or variables.
// Pure functions are predictable and easier to test and reason about.
// Examples of pure functions include mathematical operations or functions
// that return a value based on their input.

// Impure functions:

// Impure functions are functions that can produce different outputs for the same
// input, or they have side effects.
// Side effects are actions that modify the state of the program or interact with
// the outside world, such as modifying global variables, making network requests,
// or printing to the console.
// Impure functions can make code harder to understand, test, and maintain.
// Examples of impure functions include functions that modify global variables,
// read from or write to a database, or perform I/O operations.

// In React, the useEffect hook is used to handle side effects and impure
// functions within functional components. It allows you to perform actions
// like fetching data, subscribing to events, or updating the DOM after the
// component has rendered. By using the useEffect hook, you can contain impure
// actions and manage them in a controlled way.

// The following is the code to import useEffect hook
import { useEffect } from "react";


// the use Effect hook works by accepting two parameters. The first is a callback
// function. The second parameter is an array. This array can be kept empty which is
// perfectly valid while the syntax is valid. It's common to use an arrow function
// as the first argument of the invocation of the use Effect hook. Note that the
// use Effect has been simplified to a single line of code. It usually spends
// several lines of code that's because it typically needs to do something more
// meaningful than just console logging the value of the components variable.


useEffect(function() {console.log(total);}, []) // OR
useEffect(() => console.log(), [])

// By default, if no second argument is provided to the useEffect function,
// the effect will run after every render.

useEffect(() => {
    document.title = 'Little Lemon';
  });

//  However, that may cause performance issues, especially if your side effects are
//  computationally intensive. A way to instruct React to skip applying an effect
//  is passing an array as a second parameter to useEffect.

//  In the below example, the integer variable version is passed as the second
//  parameter. That means that the effect will only be re-run if the version number
//  changes between renders.

useEffect(() => {
    document.title = `Little Lemon, v${version}`;
  }, [version]); // Only re-run the effect if version changes

// If version is 2 and the component re-renders and version still equals 2,
// React will compare [2] from the previous render and [2] from the next render.
// Since all items inside the array are the same, React would skip running the effect.

// Use multiple Effects to Separate Concerns

// React doesn’t limit you in the number of effects your component can have.
// In fact, it encourages you to group related logic together in the same effect
// and break up unrelated logic into different effects.

function MenuPage(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      document.title = 'Little Lemon';
    }, []);

    useEffect(() => {
      fetch(`https://littlelemon/menu/${id}`)
        .then(response => response.json())
        .then(json => setData(json));
    }, [props.id]);

    // ...
}

// Multiple hooks allow you to split the code based on what it is doing,
// improving code readability and modularity.

// Effects with Cleanup
// Some side effects may need to clean up resources or memory that is not
// required anymore, avoiding any memory leaks that could slow down your applications.

// For example, you may want to set up a subscription to an external data source.
// In that scenario, it is vital to perform a cleanup after the effect finishes its
// execution.

// How can you achieve that? In line with the previous point of splitting the code
// based on what it is doing, the useEffect hook has been designed to keep the code
// for adding and removing a subscription together, since it’s tightly related.

// If your effect returns a function, React will run it when it’s time to clean up
// resources and free unused memory.

function LittleLemonChat(props) {
    const [status, chatStatus] = useState('offline');

    useEffect(() => {
      LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'))

      return () => {
        setStatus('offline');
        LemonChat.unsubscribeFromMessages(props.chatId);
      };
    }, []);

    // ...
  }

//  Returning a function is optional and it’s the mechanism React provides
//  in case you need to perform additional cleanup in your components.

//  React will make sure to run the cleanup logic when it’s needed. The execution
//  will always happen when the component unmounts. However, in effects that run
//  after every render and not just once, React will also clean up the effect
//  from the previous render before running the new effect next time.


// Here's a use of Useeffect hook to update the title of the document which
// is a side effect 

import React, { useState, useEffect } from 'react';

// It updates the title of the document based on the value of the toggle
// state variable. When the button is clicked, the toggle value is updated,
//  triggering the useEffect hook to update the document title accordingly.

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.title = toggle ? 'welcome to Little Lemon' : 'using the useEffect hook';
  }, [toggle]); {/* The array here is set to a value of toggle means whenever the toggle
button is clicked it will update the title of the document, if instead the array value is
set to blank then it will only run 1 time, and if you want to run it for 2 or multiple time
the number should be included in the brackets [], [2] or [any number] */}

  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1>Little Lemon App</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}

export default App;














