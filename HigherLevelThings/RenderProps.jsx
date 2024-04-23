/* Render props is a pattern in React that allows you to share code between components by using
 a prop that is a function. This function is used to determine how the data should be displayed in the component.

 Let's say we have a restaurant called Little Lemon, and they want to display the number of desserts and drinks
 available on their menu. They need to fetch this data from a server before they can show it.

 To use render props, we create a component called `DataFetcher` that is responsible for fetching the data
 from the server. This component has a prop called `render` which is a function that defines how to display the data.

 For example, we can create two components: `DessertsCount` and `DrinksCount`. Each of these components
 will use the `DataFetcher` component and pass a function to the `render` prop to display the data in different ways.
*/

// Here's what the `DataFetcher` component might look like:

import { useEffect, useState } from "react";


function DataFetcher({ url, render }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the server
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  // Call the render function with the fetched data
  return render(data);
}

// And here's how we might use it in the `DessertsCount` component:
function DessertsCount() {
  return (
    <DataFetcher
      url="/api/desserts"
      render={data => (
        <p>Number of desserts available: {data ? data.length : 'Loading...'}</p>
      )}
    />
  );
}

// Similarly, for the `DrinksCount` component:
function DrinksCount() {
  return (
    <DataFetcher
      url="/api/drinks"
      render={data => (
        <h1>Number of drinks available: {data ? data.length : 'Loading...'}</h1>
      )}
    />
  );
}

// Finally, in our main `App` component, we can render both `DessertsCount` and `DrinksCount` to display the data on the screen:
function App() {
  return (
    <div className="App">
        <header className="Header"> Little Lemon Restaurant </header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

// With render props, we've created reusable components for fetching and displaying data, 
//without having to write the fetching logic multiple times. We've also kept our components
// flexible by allowing them to define how the data should be displayed.

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState([]);

  useEffect => (() => {
    if (url.includes("desserts")) {
        setData(["cake", "ice cream", "pie", "donut"]);
    } else {
        setData(["coffee", "tea", "juice", "water"]);
    }

  }, []);

  return render(data);
};

/* The first DataFetcher function is fetching data from a server using the fetch API and updating
 the data state with the response. It takes a url prop to determine where to fetch the data from,
  and a render prop that is a function to render the fetched data.

 The second DataFetcher function, on the other hand, is not actually fetching data from a server. 
 Instead, it's using a hardcoded condition to set the data state based on whether the url prop
 includes the string "desserts" or not. It still takes a render prop to render the data, but the
 data is not dynamically fetched from an external source.
*/
