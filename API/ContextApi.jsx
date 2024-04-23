Q. // What is context api?
=> //  The context API provides an alternative way to pass data through the component
   //  tree without having to pass props down manually at every level. It is useful
   //  when you need to share data that can be considered global for a tree of React
   //  components


Q. // Why it is used?
=> //  It solves the  issue that is  commonly referred to as the props drilling problem. 
   // The name says everything you need to know about the problem. Parent components have to drill
   // down props all the way to the children that need to consume them. The way React has solved
   // this problem is by introducing the context application programming interface or API. 
   // Context provides an alternative way to pass data through the component tree without having
   // to pass props down manually at every level. It is the right tool when you need to share data
   // that can be considered global for a tree of React components.



// Below is code for meals app


// Below is another example of context api
import { createContext, useState } from "react"

const UserContext = createContext(undefined)

const [user] = useState({
    name: "John",
    email: "john@example.com"
    dob: "01/01/2001"
})
const UserProvider = ({children}) => {
    return <UserContext.Provider value={user}></UserContext.Provider>
}

const useUser = () => useContext(UserContext)

// The createContext function from React is used to create a React context. 
// A context is a way to pass data down through a component tree without having
// to pass props explicitly at each level. This is useful for data that needs
// to be globally accessible, such as user information or theme settings.

// The UserContext is getting a default value of undefined from the createContext
// function. This is because the context has not yet been provided with a value.

// The UserProvider component is a React component that provides a value to the
// UserContext. In this case, the value is an object with three properties: name,
// email, and dob. The UserProvider component returns the UserContext.Provider
// component, which wraps the children of the UserProvider component and provides
// them with access to the context value.

// The useContext hook is used to access the value of a React context. In this case,
// the useUser function is using the useContext hook to access the value of the
// UserContext. The value of the context is then used to render the LoggedIn User component.

const LoggedInUser = () => {
    const {user} = useUser();
    return (
        <p>
            Hello <span className="UserName">{user.name}</span>
        </p>
    )
}
function Header() {
    return (
        <header> 
        <h2> Blog App </h2>
        <LoggedInUser /> 
        </header>
    )
}
function App()  {
    return (
        <div className="App">
            < Header /> 
            < Page /> 
        </div>
    )
}
function Root() {
    return <UserProvider>
        <App /> 
    </UserProvider>
}

export default Root


// Below is code for changing theme from dark to light and vice versa
// The whole app is created in theme-toggler


// How re-rendering works with context
...