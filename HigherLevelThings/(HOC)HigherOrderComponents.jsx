

// What are cross cutting functions
// When building React applications, you will find yourself creating some
// generic functionality that is not related to the applications business
// logic and that is needed in many places. For example, think about managing
// different permission roles, handling errors, or even logging. They are all
// required for any application, but are not necessary from the business point
// of view. This group of functionality is what falls into the category of
// cross-cutting concerns


// OrdersList component
import React, { useState, useEffect } from 'react';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Subscribe to live orders data source
    const subscription = subscribeToOrders((newOrders) => {
      setOrders(newOrders);
    });

    return () => {
      // Unsubscribe from live orders data source
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Live Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
};


// NewsletterList component
import React, { useState, useEffect } from 'react';

const NewsletterList = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Subscribe to newsletter subscribers data source
    const subscription = subscribeToSubscribers((newSubscribers) => {
      setSubscribers(newSubscribers);
    });

    return () => {
      // Unsubscribe from newsletter subscribers data source
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Newsletter Subscribers</h2>
      <ul>
        {subscribers.map((subscriber) => (
          <li key={subscriber.id}>{subscriber.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Here is a valid implementation for a live orders list where local state
// is used for storing the current list of orders and use effect handles both
// the subscription and on subscription to the live data updating the order's
// value as soon as a new order arrives. Now, imagine the little lemon also
// needs a place in the application to keep track of the number of users
// subscribing to its newsletter in real-time. This could be a valid
// implementation for such functionality. Can you identify any similarities
// between live orders list and newsletter list? They are definitely not identical
// since they call different methods on data source and render a different output,
// but much of the implementation is the same. Upon examination, they both add a
// change listener to data source on mount, set new state whenever the data source
// changes and remove the change listener on unmount. You can imagine that in a
// large app the same pattern of subscribing to data source and setting local
// state with new data will occur over and over again.



// What is higher order component
// How could you define the subscription logic in a single place? Share it across
// many components and keep them unchanged and stateless. Well, this is where
// higher-order components are a perfect solution. A higher-order component also
// known as a HOC is an advanced pattern that emerges from React's compositional
// nature. Specifically, a higher-order component is a function that takes a
// component and returns a new component. Whereas a component transforms props
// into UI, a higher-order components transforms a component into another component.
// In other words, it enhances or extends the capabilities of the component
// provided. Let's go ahead and examine how the implementation of this reusable
// subscription logic would look with a higher-order component.


// withSubscription HOC
import React, { useState, useEffect } from 'react';

const withSubscription = (WrappedComponent, selectData) => {
  const WithSubscription = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Subscribe to data source based on selectData function
      const subscription = subscribeToData(selectData, (newData) => {
        setData(newData);
      });

      return () => {
        // Unsubscribe from data source
        subscription.unsubscribe();
      };
    }, []);

    return <WrappedComponent data={data} />;
  };

  return WithSubscription;
};

{/*                                 *Code Explanation*
 In the higher-order component code, we have created a withSubscription higher-order component
 (HOC) that takes a component and a selectData function as parameters. It returns a new component
 that renders the provided component and supplies a new prop called data which contains the most
 recent list of items from the data source of interest. The HOC handles the subscription logic
 and passes other props through to the wrapped component.

 By using the withSubscription HOC, we can enhance any component with subscription capabilities
 without having to repeat the subscription implementation in each component. In this example,
 we have created EnhancedOrdersList and EnhancedNewsletterList components by wrapping OrdersList
 and NewsletterList components respectively with the withSubscription HOC. */}

 // EnhancedOrdersList component using withSubscription HOC
const EnhancedOrdersList = withSubscription(OrdersList, 'orders');

// EnhancedNewsletterList component using withSubscription HOC
const EnhancedNewsletterList = withSubscription(NewsletterList, 'subscribers');


// With subscription is the higher-order component that takes the raft component
// you would like to enhance with subscription capabilities as well as a selectData
// function to determine the type of data you are getting from the data source. In
// this case, either orders or users. With subscription then returns a new component
// that renders the provided component and supplies a new prop to it called data that
// will contain the most recent list of items from the data source of interest. It also
// passes other prompts through to the rapt component, which is a convention in HOCs. That's
// the implementation, but how about its usage? In this case you would define two different
// components configured with custom parameters, one for live orders and another for newsletter
// subscribers all without having to repeat the subscription implementation in either live orders
// and user list making this a much more efficient solution.



{/* Don’t mutate the original component

 One of the possible temptations is to modify the component that is provided as an argument,
 or in other words, mutate it. That's because JavaScript allows you to perform such
 operations, and in some cases, it seems the most straightforward and quickest path.
 Remember that React promotes immutability in all scenarios. So instead, use composition
 and turn the HOC into a pure function that does not alter the argument it receives, always
 returning a new component. */}

 const HOC = (WrappedComponent) => {
    // Don't do this and mutate the original component
    WrappedComponent = () => {

 };
  …
}

{/* Pass unrelated props through to the Wrapped Component

 HOC adds features to a component. In other words, it enhances it. That's why they
 shouldn't drastically alter their original contract. Instead, the component returned
 from a HOC is expected to have a similar interface to the wrapped component.

 HOCs should spread and pass through all the props that are unrelated to their specific
 concern, helping ensure that HOCs are as flexible and reusable as possible, as demonstrated
 in the example below: */}

 const withMousePosition = (WrappedComponent) => {
     const injectedProp = {mousePosition: {x: 10, y: 10}};

      return (originalProps) => {
        return <WrappedComponent injectedProp={injectedProp} {...originalProps} />;
     };
};

{ /* Maximize composability
 So far, you have learned that the primary signature of a HOC is a function that
 accepts a React component and returns a new component.

 Sometimes, HOCs can accept additional arguments that act as extra configuration
 determining the type of enhancement the component receives. */}

 const EnhancedComponent = HOC(WrappedComponent, config)

 {/* The most common signature for HOCs uses a functional programming pattern
 called "currying" to maximize function composition. This signature is used extensively
 in React libraries, such as React Redux which is a popular library for managing state
 in React applications.  */}

 const EnhancedComponent = connect(selector, actions)(WrappedComponent);

// This syntax may seem strange initially, but if you break down what's happening
// separately, it would be easier to understand.

const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);

{/* connect is a function that returns a higher-order component, presenting a valuable
 property for composing several HOCs together.

Single-argument HOCs like the ones you have explored so far, or the one returned by
 the connect function has the signature Component => Component. It turns out that
 functions whose output type is the same as its input type are really easy to compose together. */}

 const enhance = compose(
      // These are both single-argument HOCs
      withMousePosition,
      withURLLocation,
      connect(selector)
    );

    // Enhance is a HOC
    const EnhancedComponent = enhance(WrappedComponent);

{/* Many third-party libraries already provide an implementation of the compose utility function, like
lodash, Redux, and Ramda. Its signature is as follows:

compose(f, g, h) is the same as (...args) => f(g(h(...args))) */}


// Caveats

{ /* Higher-order components come with a few caveats that aren’t immediately obvious.
 Don't use HOCs inside other components: always create your enhanced components outside
 any component scope. Otherwise, if you do so inside the body of other components and
 a re-render occurs, the enhanced component will be different. That forces React to
 remount it instead of just updating it. As a result, the component and its children
 would lose their previous state.  */}


 const Component = (props) => {
      // This is wrong. Never do this
      const EnhancedComponent = HOC(WrappedComponent);
      return <EnhancedComponent />;
    };

    // This is the correct way
    const EnhancedComponent = HOC(WrappedComponent);
    const Component = (props) => {
      return <EnhancedComponent />;
    };

{/* Refs aren’t passed through: since React refs are not props, they are handled specially by
 React. If you add a ref to an element whose component is the result of a HOC, the ref refers
  to an instance of the outermost container component, not the wrapped component. To solve this,
   you can use the  `React.forwardRef API` . You can learn more about this API and its use cases
 in the additional resources section from this lesson. */}

// how to implement mouse tracking functionality in a React application using a higher-order component (HOC)


import {useState,  useEffect } from "react"

const withMousePosition = (WrappedComponent) => {
  return (props) => {

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
      }

      window.addEventListener("mousemove", handleMousePositionChange)

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange)
      }
    }, [])

    return (
      <WrappedComponent {...props} mousePostion={mousePosition}/>
    )
  }
}


const PanelMouseLogger = ({mousePosition}) => {
  if(!mousePosition) return null;

  return (
    <div className="BasicTracker">
      <p> Mouse Position: </p>
        <div className='Row'>
          <span>
            X: {mousePosition.x}
          </span>
          <span>
            Y: {mousePosition.y}
          </span>
        </div>
    </div>
}

const PointMouseLogger = ({mousePosition}) => {
  if(!mousePosition) return null;

  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {
  return (
    <div className='App'>
      <header className='Header'> Little Lemon Restaurant </header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  )
}

export default App;













