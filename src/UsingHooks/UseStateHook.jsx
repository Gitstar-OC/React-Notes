// Rules of using hooks 
// You should only call hooks from a React component function.
// You should only call hooks at the top level of a React component function.
// You are allowed to call multiple state hooks or effect hooks inside a component.
// Always make these multiple hook calls in the same sequence.


import React from 'react'
import {useState} from 'react'


//The following code is used to use a useState hook
const [state, setState] = useState(false)

export default function InputComponent() {
  const [inputText, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  );
}



// You can only call hooks at the top level of your component or your own hooks.
// You cannot call hooks inside loops or conditions.
// You can only call hooks from React functions, and not regular JavaScript functions.


// To demonstrate, let’s extend the previous example, to include three input text fields within
// a single component. This could be a registration form with fields for first name, last name
// and email.


export default function RegisterForm() {
//Notice that you are using a form object to store
//the state of all three text input field values:
    const [form, setForm] = useState({
    firstName: 'Luke',
    lastName: 'Jones',
    email: 'lukeJones@sculpture.com',
  });

//You do not need to have three separate state variables in this case, and instead you can consolidate them all together into one form object for better readability.
// In addition to the useState hook, there are other hooks that come in handy such as useContext,
// useMemo, useRef, etc. When you need to share logic and reuse the same logic across several components,
// you can extract the logic into a custom hook. Custom hooks offer flexibility and can
// be used for a wide range of use-cases such as form handling, animation, timers, and many more.

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </>
  );
}


function Greet() {
    const [greet, setGreet] = useState("hi")

    return (
        <>
        <h1>
            A state value: {greet}
        </h1>
        </>
    )

}



function Heading(props) {
    return <h1>{props.message}</h1>
}


// To observe and update state you can use the state setting function
//and state variables using the state hooks but make sure you use a event handling
// attribute in jsx syntax as shown in the below example

function SetWords() {
    const [word, setWord] = React.useState("drink")

    function handleClick() {
        setWord("Eat")
    }

    return (
        <div className='App'>
            <Heading message={word + " at Little Lemon"} />
            <button onClick={handleClick}>Click to change the heading</button>
        </div>
    );
}


// Working with complex data in useState


// An example of holding state in an object and updating it based on user-generated events
// When you need to hold state in an object and update it, initially, you might try something like this:

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting({ greet: "Hello, World-Wide Web" });
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

//  While this works, it's not the recommended way of working with state objects in React,
//  this is because the state object usually has more than a single property, and it
//  is costly to update the entire object just for the sake of updating only a small
//  part of it.

// The correct way to update the state object in React when using useState

//  The suggested approach for updating the state object in React when using useState
//  is to copy the state object and then update the copy.

//  This usually involves using the spread operator (...).

//  Keeping this in mind, here's the updated code:

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    const newGreeting = {...greeting};
    newGreeting.greet = "Hello, World-Wide Web";
    setGreeting(newGreeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}


// Incorrect ways of trying to update the state object

//  To prove that a copy of the old state object is needed to update state, let’s explore
//  what happens when you try to update the old state object directly:

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    greeting = {greet: "Hello, World-Wide Web"}
    setGreeting(greeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

// The above code does not work because it has a TypeError hiding inside of it.

//  Specifically, the TypeError is: "Assignment to constant variable".

//  In other words, you cannot reassign a variable declared using const, such as in
//  the case of the useState hook's array destructuring:

// const [greeting, setGreeting] = useState({ greet: "Hello, World" });

// Another approach you might attempt to use to work around the suggested way
// of updating state when working with a state object might be the following:

export default function App() {
  const [greeting, setGreeting] = useState({ greet: "Hello, World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    greeting.greet = "Hello, World-Wide Web;
    setGreeting(greeting);
  }

  return (
    <div>
      <h1>{greeting.greet}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}


//  The above code is problematic because it doesn't throw any errors; however,
//  it also doesn't update the heading, so it is not working correctly. This means
//  that, regardless of how many times you click the "Update greeting" button, it
//  will still be "Hello, World".

//  To reiterate, the proper way of working with state when it's saved as an object is to:

//  Copy the old state object using the spread (...) operator and save it into a new
//  variable and Pass the new variable to the state-updating function

// Updating the state object using arrow functions

//  Now, let’s use a more complex object to update state. The state object now has
//  two properties: greet and location. The intention of this update is to
//  demonstrate what to do when only a specific property of the state object
//  is changing, while keeping the remaining properties unchanged:

import { useState } from "react";

export default function App() {
  const [greeting, setGreeting] = useState(
    {
        greet: "Hello",
        place: "World"
    }
  );
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting(prevState => {
        return {...prevState, place: "World-Wide Web"}
    });
  }

  return (
    <div>
      <h1>{greeting.greet}, {greeting.place}</h1>
      <button onClick={updateGreeting}>Update greeting</button>
    </div>
  );
}

//  The reason this works is because it uses the previous state, which is named
//  prevState, and this is the previous value of the greeting variable. In other
//  words, it makes a copy of the prevState object, and updates only the place
//  property on the copied object. It then returns a brand-new object:

 return {...prevState, place: "World-Wide Web"}

//  Everything is wrapped in curly braces so that this new object is built
//  correctly, and it is returned from the call to setGreeting.


// The following is a goals app with the use of useState hook

const GoalsApp = () => {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal])
  }

  return (
    <div className='App'>
      < GoalForm onAdd={addGoal} />
      < ListOfGoals allGoals={allGoals} />
    </div>
  )
}

export default GoalsApp


function GoalForm(props) {

  const[formData, setFormData] = useState({goals: "", by: ""})

  function changeHandler(e) {
    setFormData({...formData, [e.target.value]: e.target.value})
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData)
    setFormData({goals: "", by: ""})
    }

    return (
      <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='Goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
        <input type="text" name="By" placeholder='By...' value={formData.by} onChange={changeHandler} />
        <button>
           Submit Goal
        </button>
      </form>
      </>
    )

}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
      <li key={g.goal}>
        <span> My goal is to {g.goal} by {g.by} </span>
      </li>))}
    </ul>
  )
}

}


// Solution of exercise of managing state withing a component in advanced react

import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {
          ...prevState,
          text: "Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card.",
        }
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}













