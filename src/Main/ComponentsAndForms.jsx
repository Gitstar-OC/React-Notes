// Controlled components in React are a way to manage and control the state
// of form elements. Instead of relying on the internal state of the DOM
// elements, React state is used as the single source of truth for the values
// of form inputs. This is achieved by using the value prop to set the initial
// value of the form element and the onChange callback to handle updates to
// the input value. By using controlled components, you have full control over
// the form data and can easily access and manipulate it as needed.



// This is how they differ from traditional html elements
// Controlled components in React differ from traditional HTML forms in the following ways:
// State Management: In traditional HTML forms, the state of form elements is managed
// internally by the DOM. However, in controlled components, the state is managed using
// React state. React becomes the single source of truth for the values of form inputs.
// Data Flow: In traditional HTML forms, the data flow is unidirectional. When a form is
// submitted, the data is sent to the server and the page is refreshed. In controlled
// components, the data flow is bidirectional. React state is used to update the form
// inputs, and any changes in the inputs are immediately reflected in the state.
// Value Control: In traditional HTML forms, the value of form inputs is controlled by
// the user. They can enter any value they want, even if it doesn't match the expected
// format or validation rules. In controlled components, the value of form inputs is
// controlled by React state. You can enforce validation rules and manipulate the input
// values before submitting the form.
// Event Handling: In traditional HTML forms, event handling is done using inline event
// handlers or JavaScript functions. In controlled components, event handling is done
// using the onChange callback. This allows you to capture and handle changes in form
// inputs in a more controlled and declarative manner.



// Below is the example of such case

import React, { useState } from 'react';

function ControlledComponentExample() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired logic with the form input value
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponentExample;

// In this example, we have a form with a single input field for the name. The value
// of the input field is controlled by the inputValue state variable. The handleChange
// function is called whenever the input value changes, updating the inputValue state
// accordingly. The handleSubmit function is called when the form is submitted, preventing
// the default form behavior and performing any desired logic with the form input value.

// By using the value prop to set the initial value of the input field and the onChange
// callback to handle updates, we have created a controlled component that allows us to
// manage and control the state of the form input.




// Uncontrolled vs Controlled Components

// Uncontrolled Inputs
// Uncontrolled inputs are like standard HTML form inputs:

// They remember exactly what you typed, being the DOM itself that maintains that
// internal state. How can you then get their value? The answer is by using a React ref.
// In the code below, you can see how a ref is used to access the value of the input
// whenever the form is submitted.

const Form = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
      const inputValue = inputRef.current.value;
      // Do something with the value
    }
    return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
      </form>
    );
};

// In other words, you must pull the value from the field when needed.

// Uncontrolled components are the simplest way to implement form inputs. There are
//  certainly valued cases for them, especially when your form is straightforward.
//  Unfortunately, they are not as powerful as their counterpart, so let's look at
//  controlled inputs next.


// Controlled Inputs
// Controlled inputs accept their current value as a prop and a callback to change that
// value. That implies that the value of the input has to live in the React state somewhere.
// Typically, the component that renders the input (like a form component) saves that in its
// state:

const Forrm = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    return (
      <form>
        <input
          value={value}
          onChange={handleChange}
          type="text"
        />
      </form>
    );
   };

// Every time you type a new character, the handleChange function is executed.
// It receives the new value of the input, and then it sets it in the state.
// In the code example above, the flow would be as follows:

// The input starts out with an empty string: “”

// You type “a” and handleChange gets an “a” attached in the event object, as e.target.value,
// and subsequently calls setValue with it. The input is then updated to have the value
// of “a”.

// You type “b” and handleChange gets called with e.target.value being “ab”.and sets that
// to the state. That gets set into the state. The input is then re-rendered once more,
// now with value = "ab" .

// This flow pushes the value changes to the form component instead of pulling like the
// ref example from the uncontrolled version. Therefore, the Form component always has
// the input's current value without needing to ask for it explicitly.

// As a result, your data (React state) and UI (input tags) are always in sync. Another
// implication is that forms can respond to input changes immediately, for example, by:

// Instant validation per field

// Disabling the submit button unless all fields have valid data

// Enforcing a specific input format, like phone or credit card numbers

// Sometimes you will find yourself not needing any of that. In that case uncontrolled
// could be a more straightforward choice.



// The file input type
// There are some specific form inputs that are always uncontrolled, like the file
// input tag.

// In React, an <input type="file" /> is always an uncontrolled component because
// its value is read-only and can't be set programmatically.

// The following example illustrates how to create a ref to the DOM node to access
// any files selected in the form submit handler:

const Foorm = () => {
    const fileInput = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const files = fileInput.current.files;
      // Do something with the files here
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          ref={fileInput}
          type="file"
        />
      </form>
    );
   };


// Conclusion

// Uncontrolled components with refs are fine if your form is incredibly simple
// regarding UI feedback. However, controlled input fields are the way to go if
// you need more features in your forms.

// Evaluate your specific situation and pick the option that works best for you.
// The below table summarizes the features that each one supports:


// Feature                                   | Uncontrolled  | Controlled

// One-time value retrieval (e.g. on submit) | Yes | Yes
// Validating on submit                      | Yes | Yes
// Instant field validation                  | No  | Yes
// Conditionally disabling a submit button   | No  | Yes
// Enforcing a specific input format         | No  | Yes
// Several inputs for one piece of data      | No  | Yes
// Dynamic inputs                            | No  | Yes



// Below is an example of controlled forms in react

function BasicForm() {
  const [name, setName] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    setName("")
  }

  return(
    <div className='App'>
      <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <div className='field'>
        <label htmlFor="Name"> Name: </label>
        <input
        type="text"
        id='Name'
        placeholder='Name'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        </div>
        <button disabled={!name} type='submit'> Submit</button>
      </fieldset>
    </form>
    </div>
  )
}



// Below is an example of building feedback form in react

function FeedbackApp() {

  const [score, setScore] = useState("10")
  const [comment, setComment] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    if(Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment on why the experience was poor.");
    return;
    }

    console.log("Form Submitted")
    setComment("")
    setScore("10");
  }

  return (
    <div className="App">
      <form  onSubmit={handleSubmit}>
        <fieldset>

          <h2>Feedback Form</h2>

          <div className='Field'>

            <label
            htmlFor="Feedback">
            Score: {score} ⭐
            </label>

            <input
            id="Feedback"
            type="range"
            min="0"
            valeue={score}
            max="10"
            onChange={e => setScore(e.target.value)} />
          </div>

          <div className="Field">
            <label
            htmlFor="Comment">
            Comment:
            </label>
            <textarea
            name="comment"
            id="Comment"
            cols="30"
            rows="5"
            value={comment}
            onChange={e => setComment(e.target.value)} />
            </div>
        </fieldset>
      </form>
    </div>
  )
}




// Exercise: Create a registration form
// Below is my code!

import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  if (password.length < 8) {
     return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
  }
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if(firstName && password.length > 7 && validateEmail(email)) {
      return true;
    }
    return false;
  };

  const clearForm = (e) => {
    // Implement this function
    e.preventDefault();
    setFirstName('')
    setLastName("")
    setEmail("")
    setPassword("")
  };

  const handleSubmit = (e) => {
    alert("Account created!");
    clearForm();
    e.preventDefault()
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label
              htmlFor="FirstName">
              First name
              <sup>*</sup>
            </label>
            <input
              id="FirstName"
              required
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} />
          </div>

          <div className="Field">
            <label
              htmlFor="LastName">Last name</label>
            <input
              id="LastName"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)} />
          </div>

          <div className="Field">
            <label
            htmlFor="Email">
              Email address
              <sup>*</sup>
            </label>
            <input
              id="Email"
              required
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="Field">
            <label
              htmlFor="password">
              Password
              <sup>*</sup>
            </label>
            <input
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
              < PasswordErrorMessage />
          </div>

          <div className="Field">
            <label htmlFor="Role">
              Role <sup>*</sup>
            </label>
            <select>
              <option id="Role" value={role} onChange={e => setRole(e.target.value)}> Individual</option>
              <option id="Role" value={role} onChange={e => setRole(e.target.value)}> Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;



// Here is the solution code
import './App.css';
import {useState} from "react";
import {validateEmail} from "../src/utils";

const PasswordErrorMessage = () => {
 return (
   <p className="FieldError">Password should have at least 8 characters</p>
 );
};

function App() {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState({
   value: "",
   isTouched: false,
 });
 const [role, setRole] = useState("role");

 const getIsFormValid = () => {
   return (
     firstName &&
     validateEmail(email) &&
     password.value.length >= 8 &&
     role !== "role"
   );
 };

 const clearForm = () => {
   setFirstName("");
   setLastName("");
   setEmail("");
   setPassword({
     value: "",
     isTouched: false,
   });
   setRole("role");
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   alert("Account created!");
   clearForm();
 };

 return (
   <div className="App">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2>Sign Up</h2>
         <div className="Field">
           <label>
             First name <sup>*</sup>
           </label>
           <input
             value={firstName}
             onChange={(e) => {
               setFirstName(e.target.value);
             }}
             placeholder="First name"
           />
         </div>
         <div className="Field">
           <label>Last name</label>
           <input
             value={lastName}
             onChange={(e) => {
               setLastName(e.target.value);
             }}
             placeholder="Last name"
           />
         </div>
         <div className="Field">
           <label>
             Email address <sup>*</sup>
           </label>
           <input
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
             }}
             placeholder="Email address"
           />
         </div>
         <div className="Field">
           <label>
             Password <sup>*</sup>
           </label>
           <input
             value={password.value}
             type="password"
             onChange={(e) => {
               setPassword({ ...password, value: e.target.value });
             }}
             onBlur={() => {
               setPassword({ ...password, isTouched: true });
             }}
             placeholder="Password"
           />
           {password.isTouched && password.value.length < 8 ? (
             <PasswordErrorMessage />
           ) : null}
         </div>
         <div className="Field">
           <label>
             Role <sup>*</sup>
           </label>
           <select value={role} onChange={(e) => setRole(e.target.value)}>
             <option value="role">Role</option>
             <option value="individual">Individual</option>
             <option value="business">Business</option>
           </select>
         </div>
         <button type="submit" disabled={!getIsFormValid()}>
           Create account
         </button>
       </fieldset>
     </form>
   </div>
 );
}

export default App;

