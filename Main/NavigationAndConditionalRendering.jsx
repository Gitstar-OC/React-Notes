// The following is the code to import react router in index.js
import {BrowserRouter} from "react-router-dom"

// To use that routes in app you need to import route and routes
// This is the code for that
import { Routes, Route } from "react-router-dom"
// You also need to import Links from react-router-dom
import {Link} from "react-router-dom"

//The following is the code to install react router in react app through terminal
// npm i react-router-dom@6


// Different types of navigation menus are used in nowdays websites
// Some of this are horizontal > navbar, vertical > sidebar, menu hiding behind a
// button is called as burger menu, other is dropdown navigation menu (hiding behind a button too)
// There is also a footer navigation menu


// After Installing the react-router you need to import it in the index.js file too
// and then you need to wrap the app.js element inside the browser router
// The code for this is the following
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <BrowserRouter> <App /> </BrowserRouter> )



// The following is the whole app component linking to home and about page

function Homepage() {
    return (
        <>
        <h1>
            This is the Homepage
        </h1>
        </>
    )
}

function AboutMe() {
    return (
        <>
        <h1>
            Inside this page will be the details of me
        </h1>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about-me" className="nav-item">About Me</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </div>
    )
}



// Conditional Rendering for menu's or other thing
// In an app, you can render components conditionally based on whether a
// specific state data has specific values. In other words, when you write the
// rendering logic in the main app component, you'll need to reference the state
// of the other components. For example, suppose you have a component that contains
// code for a button that shows a sidebar, the button controls the state of the
// toggle sidebar variable, which is set to false. When the button is clicked,
// the state of the toggle sidebar variable is updated to True, and the sidebar
// component is displayed. To make this possible react works with conditional
// concepts and syntax that are already available in JavaScript.

// Using the ternary operator to write simplified, if else conditions,
// or Conditional Rendering


//Following is the conditional code to tell whether it is weekday or weekday
function CurrentMessage() {
    const day = new Date().getDay();

    return day >= 1 && day <= 5 ? <Workday /> : <Weekend />;
}



// Conditional rendering with the help of element variables
function NewMessage({ day }) {
    const weekday = (day >= 1 && day <= 5);
    const weekend = (day >= 6 && day <= 7);
    let message;

    if (weekday) {
        message = <Workdays />;
    } else if (weekend) {
        message = <Weekends />;
    } else {
        message = <ErrorComponent />;
    }

    return (
        <div>
            {message}
        </div>
    );
}

// Conditional rendering using the logical AND operator
function LogicalAndExample() {
    const val = prompt('Anything  but a 0')

    return (
        <div>
            <h1>Please don't type in a zero</h1>
            {val && val  !== 0 &&
                <h2>Yay, no 0 was typed in!</h2>
            }
            {val === 0 &&
                <h2>Oh no, you typed in a 0!</h2>
            }
        </div>
    )
}

{/* true && console.log('This will show') */}
{/* false && console.log('This will never show') */}

// Have you ever visited a website that required a user account? To log
// in you click on a Log in button and once you’ve logged in, the Log in
// button changes to a Log out button.
// This is often done using something called conditional rendering.

// In a previous course, you’ve already learned about simple conditions using
// if and switch statements.
// Using these statements allows you to change the behaviour of code based
// on certain conditions being met.
// For example, you can set a variable to a different value based on the
// result of a condition check.

{ // Code in JavaScript
let name;
if (Math.random() > 0.5) {
	name = "Mike"
} else {
	name = "Susan"
} }


// Conditional rendering is built on the same principle. By using conditions,
// you can return different child components. This is often done using the props
// that are passed into the parent component, but can also be done based on
// component state.
// Let’s take a look at a simple example.
// Let’s say you have two child components called LoginButton and LogoutButton;
// each displaying their corresponding button.
// In the parent component, named LogInOutButton, you can check the props passed
// into the parent component and return a different child component based on the
// value of the props.
// In this example, the props contains a property named isLoggedIn. When this
// is set to true, the LogoutButton component is returned. Otherwise, the
// LoginButton component is returned.


function LogInOutButton(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {
 return <LogoutButton />;
} else {
 return <LoginButton />;
}

//Then when the LogInOutButton parent component is used, the prop can be passed in.

{<LogInOutButton isLoggedIn={false} />}
// This is a simple example showing how you can change what is displayed
// based on a condition check. You will use this often when developing React
// applications.


// Conditional Rendering of a Meals or App that asks if you have done a breakfast yet!
function MealsApp() {
    const time = new Date()
    const day = time.toLocaleString("en-us" { weekday:"long" } )
    const morning = time.getHours() >= 6 && time.getHours <= 15
    let dayMessage;

{/* const time = new Date()
const day =  time.toLocaleString("en-us" { weekday:"long" } )
const morning = time.toLocaleString("Asia/Kolkata").split(" ")[1] >=6 && time.toLocaleString("Asia/Kolkata").split(" ")[1 <=15]
 */}

// Here, we use the toLocale String() method with the "Asia/Kolkata" timezone to
// get the current time in India. We then split the result by the space character
// to get an array with the date and time. We use the second element of the array,
// which is the time, to check if it is between 6am and 3pm, which is considered
// morning in India.

    if (day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    } else if (day.toLowerCase() === "tuesday") {
        dayMessage = `${day}, four days to go`;
    } else if (day.toLowerCase() === "wednesday") {
        dayMessage = `${day}, half way there`;
    } else if (day.toLowerCase() === "thursday") {
        dayMessage = `${day}, start planning the weekend;`
    } else if (day.toLowerCase() === "friday") {
        dayMessage = `Woo hoo, the weekend is coming!`;
    } else {
        dayMessage = "Stay calm and keep having fun";
    }
    return(
        <div className="App">
            <h1>{dayMessage}</h1>
            { morning ? <h2> Have you had breakfast yet</h2> : ""}
        </div>
    )
}