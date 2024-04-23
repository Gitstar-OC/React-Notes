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

