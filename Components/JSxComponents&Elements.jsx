//Components:

/*Components are reusable and self-contained pieces of code that define the behavior and structure of a UI.
They are typically written as JavaScript functions or classes.
Components can have their own state, props (properties), and lifecycle methods.
Components are used to create instances of UI elements.*/

// Elements:

/* Elements are the plain JavaScript objects that represent the rendered output of components.
They describe the structure and content of the UI.
Elements are created using JSX syntax, which combines HTML-like markup with JavaScript logic.
Elements can be nested to create a tree-like structure that represents the U    I hierarchy.
Here's an example to illustrate the difference: */

// Component
function Button(props) {
  return <button>{props.label}</button>;
}

// Element
const buttonElement = <Button label="Click me" />;


// Understanding React and JSX for UI Representation

/*   JSX is a syntax extension to JavaScript used by React to describe UIs. It looks like HTML but
// combines markup with logic in a component-based structure. Components in React are reusable
// blocks of code that encapsulate UI logic, while elements are the actual instances created from
// these components, represented as plain JavaScript objects.

// The rendering process in React involves analyzing JSX to create an intermediary tree of elements,
// where each node is an object describing a component instance or DOM node. These elements have a
// 'type' and 'props', where 'type' can be a DOM tag or a user-defined component, and 'props' are
// the properties passed to the component.

// For example, a 'SubmitButton' component would be represented as an element with a type pointing
// to the component's function. React allows nesting of components and DOM elements within the
// element tree, enabling a mix-and-match approach to UI composition.

// When a UI change occurs, React creates a new tree of elements and compares it with the previous
// version, calculating the differences (diffing). Based on this diff, React updates the DOM with
// the minimum required changes, resulting in efficient UI updates.

// This process leads to the creation of the Virtual DOM, a lightweight representation of the real
// DOM that allows React to perform updates predictably and efficiently, suitable for high-
// performance applications.

// In summary, React's declarative programming model uses JSX to describe UIs, components to define
// UI logic, and elements to represent the rendered output, all working together to create dynamic
// and responsive web applications. */

// Component composition with children
/* Component composition is a technique that allows us to build complex user interfaces by combining
 smaller, reusable components together. It involves using the "children" prop to pass other components
 or elements as children to a parent component. This enables us to create more robust and reusable
 components, breaking down complex UIs into smaller, manageable pieces. There are two main features
 of component composition: containment and specialization. Containment refers to components that
 don't know their children ahead of time, while specialization means components being special cases
 of other components. By leveraging component composition, we can create powerful and customizable
 UI's  in our React applications. */

// Example of component composition
/*
/*
 Let's say we want to build a social media feed component that displays posts from different users.
 We can use component composition to create this complex user interface.

 First, we can create a Post component that represents an individual post. This component can take
 props like username, content, and timestamp to display the relevant information.

 Next, we can create a Feed component that acts as a container for multiple Post components. The
 Feed component can have a posts prop, which is an array of post objects. Inside the Feed component,
 we can use the map function to iterate over the posts array and render a Post component for each post.

 Here's an example of how the code might look:
*/



// Example 1
// Post component
const Post = ({ username, content, timestamp }) => {
    return (
      <div>
        <h3>{username}</h3>
        <p>{content}</p>
        <small>{timestamp}</small>
      </div>
    );
  };

  // Feed component
  const Feed = ({ posts }) => {
    return (
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            content={post.content}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    );
  };

  // Usage
  const posts = [
    { id: 1, username: "JohnDoe", content: "Hello, world!", timestamp: "2 hours ago" },
    { id: 2, username: "JaneSmith", content: "React is awesome!", timestamp: "1 hour ago" },
    // more posts...
  ];

  const App = () => {
    return <Feed posts={posts} />;
  };

/* In this example, we have used component composition to build a complex user interface by combining
 the Post and Feed components. The Feed component takes an array of post objects as a prop and
 dynamically renders multiple Post components based on the data provided.

 By using component composition, we can easily reuse the Post component in other parts of our
 application and keep our code modular and maintainable.*/


// Example 2
// We can also use the same approach to create a Comment component that displays a comment and a timestamp.

// Comment component
const Comment = ({ username, content, timestamp }) => {
    return (
      <div>
        <h3>{username}</h3>
        <p>{content}</p>
        <small>{timestamp}</small>
      </div>
    );
  };

  // Usage
  const comments = [
    { id: 1, username: "JohnDoe", content: "Hello, world!", timestamp: "2 hours ago" },
    { id: 2, username: "JaneSmith", content: "React is awesome!", timestamp: "1 hour ago" },
    // more comments...
  ];

  const App = () => {
    return <Feed comments={comments} />;
  };


// Example 3
// We can also use the same approach to create a CommentList component that displays a list of comments.

// CommentList component
 const CommentList = ({ comments }) => {
    return (
      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.username}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    );
 };

  // Usage
  const comments = [
    { id: 1, username: "JohnDoe", content: "Hello, world!", timestamp: "2 hours ago" },
    { id: 2, username: "JaneSmith", content: "React is awesome!", timestamp: "1 hour ago" },
    // more comments...
  ];

  const App = () => {
    return <CommentList comments={comments} />;
  };


// Examaple 4

const Button  = ({children, backgroundColor}) => {
    return <button style={{backgroundColor}}> {children} </button>
}

const Alert = ({children}) => {
    return (
        <>
        <div className="Overlay" />
        <div className="Alert">{children}</div>
        </>
    )
}

const DeleteButton = () => {
    return (
        <Button backgroundColor="red">Delete</Button>
    )
}

function App() {
    return (
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <Alert>
             <h4>Delete Account</h4>
             <p>
                 Are you sure you want to proceed, You will miss all our delicious recipe!
             </p>
             <DeleteButton />
            </Alert>
        </div>
    );
}

// Meaning of the code
// In this example, we are showing how to use React to put together different parts of a user interface, like building blocks. This is called component composition. It's like having a plain box and being able to fill it with whatever you want. For the Little Lemon restaurant, we need a pop-up message that warns users before they delete their account. We want to make sure they know they'll be missing out on great recipes. So, we'll create a header that says "Delete Account" and a message that explains the consequences. We'll also add a red "Delete" button that we've made earlier.

// This is how we do it step by step:
// First, we have a simple button that can change color and text based on what we tell it to do.
const Button  = ({children, backgroundColor}) => {
    return <button style={{backgroundColor}}> {children} </button>
}

// Next, we have an alert box. It's just a container that can hold any message we want to show on top of a darkened background.
const Alert = ({children}) => {
    return (
        <>
        <div className="Overlay" />
        <div className="Alert">{children}</div>
        </>
    )
}

// Then, we make a special "Delete" button that is red and says "Delete". This is using the button we made earlier and giving it a specific look and purpose.
const DeleteButton = () => {
    return (
        <Button backgroundColor="red">Delete</Button>
    )
}

// Finally, we put it all together in our app. We create a header, a warning message, and our special "Delete" button, and we put all of these inside our alert box.
function App() {
    return (
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <Alert>
             <h4>Delete Account</h4>
             <p>
                 Are you sure you want to proceed? You will miss all our delicious recipes!
             </p>
             <DeleteButton />
            </Alert>
        </div>
    );
}

// That's it! We've just created a customizable pop-up message using component composition in React. This way, we can reuse the same pieces in different parts of our application and make changes easily when needed.


// Types of Children
/*
In JSX expressions, the content between an opening and closing tag is passed as a unique prop called children. There are several ways to pass children, such as rendering string literals or using JSX elements and JavaScript expressions. It is also essential to understand the types of JavaScript values that are ignored as children and don’t render anything. Let’s explore these in a bit more detail:

String literals
String literals refer to simple JavaScript strings. They can be put between the opening and closing tags, and the children prop will be that string.

<MyComponent>Little Lemon</MyComponent>

In the above example, the children prop in MyComponent will be simply the string “Little Lemon”.

There are also some rules JSX follows regarding whitespaces and blank lines you need to bear in mind, so that you understand what to expect on your screen when those edge cases occur.
*/
/*
// 1. JSX removes whitespaces at the beginning and end of a line, as well as blank lines:
<div>  Little Lemon   </div>
 <div>
   Little Lemon
</div>

// 2. New lines adjacent to tags are removed:
<div>

  Little Lemon
</div>

// 3. JSX condenses new lines that happen in the middle of string literals into a single space:

<div>
  Little
  Lemon
</div>

*/
// That means that all the instances above render the same thing.

// JSX Elements
// You can provide JSX elements as children to display nested components:
<Alert>
  <Title />
  <Body />
</Alert>

// JSX also enables mixing and matching different types of children, like a combination of string literals and JSX elements:
/*
<Alert>
  <div>Are you sure?</div>
  <Body />
</Alert>
*/

/* A React component can also return a bunch of elements without wrapping them in an extra tag.
   For that, you can use React Fragments either using the explicit component imported from React
   or empty tags, which is a shorter syntax for a fragment. A React Fragment component lets you
   group a list of children without adding extra nodes to the DOM. You can learn more about
   fragments in the additional resources unit from this lesson.

   The two code examples below are equivalent, and it’s up to your personal preference what to choose,
   depending on whether you prefer explicitness or a shorter syntax:
*/

return (
      <React.Fragment>
        <li>Pizza margarita</li>
        <li>Pizza diavola</li>
      </React.Fragment>
    );

    return (
      <>
        <li>Pizza margarita</li>
        <li>Pizza diavola</li>
      </>
    );

// JavaScript Expressions
/*
You can pass any JavaScript expression as children by enclosing it within curly braces, {}. The below expressions are identical:

<MyComponent>Little Lemon</MyComponent>

<MyComponent>{'Little Lemon'}</MyComponent>

This example is just for illustration purposes. When dealing with string literals as children, the first expression is preferred.

Earlier in the course, you learned about lists. JavaScript expressions can be helpful when rendering a list of JSX elements of arbitrary length:
*/

function Dessert(props) {
      return <li>{props.title}</li>;
    }

    function List() {
      const desserts = ['tiramisu', 'ice cream', 'cake'];
      return (
        <ul>
          {desserts.map((dessert) => <Item key={dessert} title={dessert} />)}
        </ul>
      );
    }

/* Also, you can mix JavaScript expressions with other types of children without having to resort to string
 templates, like in the example below:
*/
function Hello(props) {
      return <div>Hello {props.name}!</div>;
    }

// Functions
/* Suppose you insert a JavaScript expression inside JSX. In that case, React will evaluate it to a
   string, a React element, or a combination of the two. However, the children prop works just like
   any other prop, meaning it can be used to pass any type of data, like functions.

  Function as children is a React pattern used to abstract shared functionality that you will see in
  detail in the next lesson.
*/

// Booleans, Null and Undefined, are ignored
/*
false, null, undefined, and true are all valid children. They simply don’t render anything.
The below expressions will all render the same thing:

 <div />

 <div></div>

 <div>{false}</div>

 <div>{null}</div>

 <div>{undefined}</div>

 <div>{true}</div>

 Again, this is all for demonstration purposes so that you know what to expect on your screen
 when these special values are used in your JSX.

 When used in isolation, they don’t offer any value. However, boolean values like true and
 false can be useful to conditionally render React elements, like rendering a Modal component
 only if the variable showModal is true
*/

<div>
  {showModal && <Modal />}
</div>

/*
However, keep in mind that React still renders some "false" values, like the 0 number. For example, the below code will not behave as you may expect because 0 will be printed when props.desserts is an empty array:
*/
/*
<div>
  {props.desserts.length &&
    <DessertList desserts={props.desserts} />
  }
</div>
*/
// To fix this, you need to make sure the expression before && is always boolean:
/*
<div>
  {props.desserts.length > 0 &&
    <DessertList desserts={props.desserts} />
  }
</div>

<div>
  {!!props.desserts.length &&
    <DessertList desserts={props.desserts} />
  }
</div>
*/


// Manipulating children dynamically in jsx
/*
React children is a special prop that allows for more dynamic component design. While typically consumed as provided,
React's APIs enable transformation of children elements. For instance, to help a restaurant like Little Lemon visualize
live order summaries, React.cloneElement and React.children can be utilized.

React.cloneElement is part of React's top-level API for element manipulation. It clones a given element, allowing for
property modification, addition, and extended functionality. For example, you could dynamically add a prop to a button
element.

React.children provides utilities for handling the children prop structure, with React.children.map being a key method.
It's similar to array's map function, applying a function to each child, transforming them, and returning a new element.

Key Points:
- React.cloneElement:
  - Clones and returns a new element with merged props.
  - Useful for modifying or extending children components.

- React.children:
  - Handles the children prop structure.
  - React.children.map applies transformations to each child.

Example:
// Using React.cloneElement to add a new prop
const EnhancedButton = React.cloneElement(
  submitButtonElement,
  { newProp: 'value' }
);

// Using React.children.map to transform children
const ListItems = React.children.map(props.children, (child) =>
  <li>{child}</li>
);
*/

import React from "react";

// The Row component takes in children and a spacing prop
const Row = ({ children, spacing }) => {
  // Define a style object to be applied to each child except the first one
  const childStyle = {
    marginLeft: `${spacing}px`, // Use the spacing prop to set the left margin in pixels
  };

  // Return a div with a className of "Row"
  return (
    <div className="Row">
      {/* Use React.Children.map to iterate over each child */}
      {React.Children.map(children, (child, index) => {
        // Clone each child and merge the styles
        return React.cloneElement(child, {
          style: {
            ...child.props.style, // Keep any existing styles on the child
            ...(index > 0 ? childStyle : {}), // Apply the childStyle if it's not the first child
          },
        });
      })}
    </div>
  );
};
function LiveOrders() {
  // The LiveOrders component renders a Row with a fixed spacing between elements
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>$30</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}

export default LiveOrders;

// Explanation:
// The Row component is designed to display its children (in this case, pieces of information about a live order) with a consistent space between them.
// The spacing prop specifies the amount of space between each child, except for the first one.
// React.Children.map is used to iterate over each child passed to the Row component.

// The Little Lemon restaurant needs to display live orders with clear spacing between key details.
// We have a Row component that currently shows all items without separation.
// To fix this, we'll use React.cloneElement and React.Children.map to add horizontal spacing.
// We'll iterate through each child with Children.map and add a left margin to all except the first.
// We create a 'spacing' prop to define the margin size in pixels.
// With cloneElement, we merge the new margin style with any existing styles on the child.
// By setting the 'spacing' prop to 32 pixels in the Row component, we ensure clear presentation of each order.
// Now, chefs can easily read the order details and avoid cooking mistakes.
// This approach showcases the power of React.cloneElement and React.Children.map for dynamic child manipulation.



// Exercise Build a radio group comoponent

// Instruction
/* Step 1:
Review the App.js file to understand the props for RadioGroup and RadioOption components.
They currently don't render anything. No changes needed in this file.
Step 2:
In Radio/index.js, complete the RadioGroup component. Replace null in RadioOptions with
React.Children.map to iterate and clone children using React.cloneElement. Assign the result
to RadioOptions. Each cloned child should get checked and onChange props.
Step 3:
In Radio/index.js, finish the RadioOption component. It needs value, checked, and onChange
props connected to its input element. The RadioOption receives these props already. Link them
to the input. For onChange, use the event target's value property to get the selected radio
option's value.
The RadioOption component already receives all those props. Your goal is to connect
them to the input element.
When adding the onChange prop to the radio input, which represents the event that
gets triggered whenever you interact with it, you can access the value property of the
event target to get the value of the newly selected radio option, as per the code below.
*/

const handleChange = (e) => {
  const newValueSelected = e.target.value
}

// Solution

import * as React from "react";

export const RadioGroup = ({ onChange, selected, children }) => {
 const RadioOptions = React.Children.map(children, (child) => {
   return React.cloneElement(child, {
     onChange,
     checked: child.props.value === selected,
   });
 });
 return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
 return (
   <div className="RadioOption">
     <input
       id={value}
       type="radio"
       name={value}
       value={value}
       checked={checked}
       onChange={(e) => {
         onChange(e.target.value);
       }}
     />
     <label htmlFor={value}>{children}</label>
   </div>
 );
};


import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;

// Explaination
/* Step 1
 The API for the RadioGroup component is defined as two props: selected, which is a string that matches
 one of the RadioOption values and onChange, which is the event that gets called whenever a selection
 changes, providing the new value as an argument.

Step 2
 The RadioOptions variable should be assigned to the return value of React.Children.map, which will be a
 new React element. The first argument passed to the map function should be the children prop, and the
 second is a function that gets invoked in every child contained within the children property. Recall
 that a children prop is a special prop all React components have and that it presents a special data
 structure, similar to arrays, where you can perform iterations. However, they are not exactly instances
 of JavaScript arrays. That’s why to iterate over all siblings you should use the special React.children.map
 API provided by React.
Inside the map projection function, you should first clone the element using React.cloneElement, passing
as first argument the target child element and as a second argument a configuration with all new props.
The resulting element will have the original element’s props with the new props merged in.
onChange can be passed to each child (RadioOption) as it is and checked is the property the
RadioOption uses to determine if the underlying radio input is selected. Since RadioGroup receives a
selected property, which is a string pointing to the value of the option that has been selected,
checked will be only true for one of the options at any point in time. This is guaranteed by performing
an equality check, comparing the RadioOption value prop with the selected value.
Finally, the RadioGroup component returns the new RadioOptions elements by wrapping them in curly braces.

Step 3
The RadioOption component now receives two new props implicitly, onChange and checked, that RadioGroup
is injecting via children manipulation, as seen in the previous section.
The value prop is already provided explicitly inside the App.js component and children represents the
label text for the radio input.
You have to connect the props value, checked and onChange correctly. First, both value and checked props
should be passed to the radio input as is. Then, you should use the onChange event from the radio input,
retrieve the value property from the event target object and pass it to the onChange prop as the argument
as seen below. That completes the implementation of the RadioOption component.
*/
/*
   Copying and merging are two main operations performed with the spread operator on objects. To copy an object, use curly braces 
   and the three dots before the object. To merge, spread the properties from the original object and add or replace with new ones.

   For example, in a component that renders another component with multiple props, using the spread operator can save time by avoiding 
   manual typing. However, be aware of the order in which you use the spread operator, as it can affect the behavior of your components.

   In a sample application for Little Lemon Restaurant, a button component is created that wraps a native DOM button, with a custom 'type' 
   prop added. The spread operator is used to group native button props while extracting custom props. A login button component pre-configures 
   some button component props, like 'type' and 'onClick', and passes down native button props with the spread operator.

   In the app component, the button and login button components are rendered with 'onClick' handlers. However, if the 'onClick' prop is 
   overridden in the wrong order, the intended alert message may not display correctly. The order of the spread operator matters, as it 
   determines which props are overridden and which are preserved.

   In summary, the spread operator is a powerful tool for creating flexible components in React. It allows for easy prop forwarding and 
   customization, but developers must be mindful of the prop order to avoid unintended overrides.
*/

// In this example, order amend represents a last minute change to the type of pizza ordered by the customer. 

const orderCopy = {...order}

const orderAmmend = {
  ...order, 
  item : "Burito"
}

function OrderList() {
  return (
    < Order /* This order list component example renders an order component. Each order component 
     expects four props an ID, user name, item and price. This first example shows how you might
     usually do it, passing all the props in the return statement explicitly. However, this can be
     simplified if you already have the props your order component needs in an object. Here, you can
     see that only the spread operator is required in the return statement, saving us time by just
     spreading all the props and avoiding having to type them manually. This pattern allows you to
     create flexible components*/ id="1" username="John Due" item="Pizza" price="$30.00"  OR  {...orderAmmend} /> 
  )
}


const Button = ({type, children, ...buttonProps}) => {
  const className = type  === "primary"? "primary-button" : "secondary-button"
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}</button>
  )
}


const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button type="secondary"
     {...buttonProps}
     onClick={() => {
      alert("Logging In")}}>
      {children}</Button>
  )
}

export default function App() {
  return (
    <div className="App">
      <header className="Header">
        Little Lemon Restaurant 
      </header>
      <Button type="primary" onClick={() => alert("signing up ")}> 
      Sign Up 
      </Button>
      <LoginButton type="secondary " onClick={() => alert("logging in")}>
        Log In
      </LoginButton>
      </div>
  )
}

/*
 The spread operator is a great tool that enables the creation of more flexible components, especially
 when forwarding props automatically to other components expect them as well as providing your consumers
 with a nice component. API. However, keep in mind that depending on the order of the spread, the behavior
 may differ so you need to be conscious about your decision when it comes to component design. In the example
 of the login button before it may make sense to prevent the override of the on click property but it may not
 be the intended case for other props.
 */