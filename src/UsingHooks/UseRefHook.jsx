// The useRef hook
// We use the useRef hook to access a child element directly.
// When you invoke the useRef hook, it will return a ref object. The ref object has a property named current.

import { useRef } from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
}

export default TextInputWithFocusButton;


//  The useRef hook in React is used to create a mutable reference that persists
//  across re-renders of a component. It allows you to access and manipulate the
//  underlying DOM elements directly. Here are some key functions of the useRef hook:

//  Creating a reference: You can create a reference using the useRef() function
//  and assign it to a variable. For example:

  const myRef = useRef();

//  Accessing the DOM element: You can access the DOM element by using the current
//  property of the reference. For example:

  const element = myRef.current;

//  Manipulating the DOM element: You can manipulate the DOM element by using its
//  properties and methods. For example, you can set the focus on an input field
//  using the focus() method:

 myRef.current.focus();

//  The useRef hook is commonly used for tasks like managing focus, accessing
//  measurements, and integrating with third-party libraries. It provides a
//  way to interact with the DOM in a declarative and efficient manner within
//  a React component.


// Here's example of code that focus on the cursor when click on the focus button 

import React, { useRef } from 'react';

function App() {
  const formInputRef = useRef();

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <>
      <h1>Using useRef to access the underlying DOM</h1>
      <input type="text" ref={formInputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;
