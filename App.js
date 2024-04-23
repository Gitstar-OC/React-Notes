import React from 'react'
import './App.css';
import Jadu from "./Jadu"
import Header from './Header';
import Love from "./Love"
import ReactLogo from "./../src/logo512.png"
import ModeTogler from './ModeTogler';


// Code to create npm app 
// npm init react-app little-lemon
// npx create-react-app little-lemon

// this is a fuction declaration in react
function Heade() {
  let title = "This is heading"
  return <h1>{title}</h1>
}



//this is code for using logo 
function Logo(props) {
  const userPic = <img src={ReactLogo} /> 
  return userPic
}
// this is an example for a url of photo
const url = 'photo.png'





// The following is a code of funciton expression 
const Nav = function(props) {
  return (
      <ul>
          <li>{props.first}</li>
      </ul>
  )
}



//The following line of code is function as Arrow functions (arrow is itself replacement for the function keyword)
const Bag = (props) => {
  return (
    <>
    <ul>
      <li>{props.children}</li>
    </ul>
    </>
  )
}



//In all other cases, when you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.
//For example, if your Nav component wasn't accepting any parameters, you'd code it with empty parentheses
const example2 = () => {

}



//Using Arrow Functions in Other Situations
//In React, just like in plain JavaScript, arrow functions can be used in many different situations. One such situation is using it with, for example, the forEach() built-in array method.
[10, 20, 30].forEach(item => item * 10)



//Another interesting thing about arrow functions is the implicit return. However, it only works if it's on the same line of code as the arrow itself. In other words, the implicit return works if your entire component is a single line of code.
const example3 = () => <li>This is a single line code</li>



//Like the previous example, you can use function invocation inside JSX to return a random number:
function Example2() {
  return (
      <div className="heading">
          <h1>Here's a random number from 0 to 10: 
              { Math.floor(Math.random() * 10) + 1 }
          </h1>
      </div>
  );
};



//You can also extract this fuctinality into seperate function
function Example3() {

  const getRandomNum = () => Math.floor(Math.random() * 10) + 1

  return (
      <div className="heading">
          <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
      </div>
  );
};



//Function Expression
const getRandomNum = function() {
  return Math.floor(Math.random() * 10) + 1
} ;



//Function declaration
function GetRandomNum() {
  console.log("clicked button 1")
};



const MouseOver = () => {
  console.log('Mouse is over the button')
}



//Handling events using inline anonymous ES5 functions
{/* <button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
</button> */}



//Handling events using inline anonymous ES6 functions (arrow functions)
{/* <button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button> */}



// Handling events using separate function declarations
// function App() {
//       function thirdExample() {
//           console.log('third example');
//       };
//       return (
//           <div className="thirdExample">
//               <button onClick={thirdExample}>
//                   using a separate function declaration
//               </button>
//           </div>
//       );
//   };
//   export default App;



// //Handling events using separate function expressions
// function App() {
//       const fourthExample = () => console.log('fourth example');

//       return (
//           <div className="fourthExample">
//               <button onClick={fourthExample}>
//                   using a separate function expression
//               </button>
//           </div>
//     );
//   };
//   export default App;



const data = {
  heading: "99% off on all items",
  callToAction: "Everything must go"
}



function Promo() {
  return (
    <div>
      <PromoHeading
      heading={data.heading}
      callToAction={data.callToAction}
      />
    </div>
  )
}



//  Data flow in React, code samples need to be clear and concise
// In React, data flow is a one-way street. Sometimes it's said that the data flow is unidirectional.
//  Put differently, the data in React flows from a parent component to a child component. 
//  The data flow starts at the root and can flow to multiple levels of nesting, 
//  from the root component (parent component) to the child component, 
//  then the grandchild component, and further down the hierarchy.
//  A React app consists of many components, organized as a component tree. 
// The data flows from the root component to all the  components in the tree structure 
// that require this data, using props.
// Props are immutable (cannot be changed).
// The two main benefits of this unidirectional data flow are that it allows developers to:
// comprehend the logic of React apps more quickly and simplify the data flow. 
//Here’s a practical example of this:
//Imagine that the parent component passes a prop (name) to the child component. The child 
//component then uses this prop to render the name in the UI.






function App() {

//If you want to return html code over multiple lines it should be included in parenthesis
//html code must also be wrapped in a div statement or use fragments instead like <> </>
//To give react a class attribute you should use className attribute

//You can add css rules by 3 method, by linking it to css documen, by inline styling or by setting styles already and using it
const style1 = {
  color: "red",
  fontSize: "40px"
}

const style2 = {
  color: "purple",
  fontSize: "5vw"
}

return (
    <div className="App">
      <div>
        <ul>
          <li>{"He" + "llo"}</li>
          <li>{3 * 5}</li>
          <li>{2}</li>
          <li>{16 / 4}</li>
        </ul>
        <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
          Scroll Down
        </h1>
        <h2>{/*This is example of ternary operator in react*/}{Math.random() >= 0.5 ? "Over O.5" : "Below 0.5"}</h2>
        <h3>{/*It workd like this comparison ? true : false */}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.
        </p>
      </div>
      <div className="App_div">
         <h1 style={style1}>Hello React</h1>
         <button onClick={GetRandomNum}>This is a button which generates a random number between 0 to 10.</button>
         < Heade style={style2} />
         <a href='/newpage' onMouseOver={MouseOver}>This link leads to new page</a>
         < Nav first="this is first prop"/>
         < Header name="Header's Prop" color="Blue"/>
         < Jadu name="Jadu's Prop" color="Orange"/>
         < Logo />
         < ModeTogler /> 
         {/* <Example children={<Hello />} />
         <Example children={<Hello massage="Hello there"/>} />
         <Bag children={<Apples color="yellow" number="5" />} />
         <Bag children={<Pears friend="Peter" />} /> */}
      </div>
    </div>
  );
}
export default App;



