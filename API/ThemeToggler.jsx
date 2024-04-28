// Here's a code that togles the theme (Change the theme of app from dark to light or vice versa)

// Below is the code of theme-context.js
import { createContext, useState, useContext } from "react"

 const ThemeContext = createContext(undefined)

export const ThemeProvider = ({children})  => {
  const [theme, setTheme] = useState(" light")

  return ( 
    <ThemeContext.Provider
    value={{theme,
    toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")}}>
    {children} 
    </ThemeContext.Provider>
  )
}

 export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}


// Below is the code of Switch.js
import "./Switch.css"
import { useTheme } from "../ThemeContext"


const Switch = () => {
 const { theme, toggleTheme } = useTheme()
 
 return (
  <label className ="switch">
    <input type="checkbox"
    checked={theme === "light"}
    onChange={toggleTheme} />
    <spna className="slider round" /> 
  </label>
 )
}

export default Switch;


// Below is the code of App.js
import "./App.css" ;
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch/Switch";

const Title = ({ children }) =>  {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph =  ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good , none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme(); // Added curly braces for object destructuring
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
