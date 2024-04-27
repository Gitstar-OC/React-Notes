// With React Testing Library
/* As the developer for Little Lemon Restaurant application, how could you guarantee that the
 app you created works as intended? Well, That's where automation tests come in. .

 A well-designed suite of automation tests is particularly effective in allowing you to discover
 defects or bugs before delivery to the client. In doing so, testing is important for guaranteeing
 the quality of the software you develop. Further, by catching bugs before they find their way into
 a live application, testing reduces the number of user complaints, and can ultimately save an
 organization time and money. Now that you have an idea of why testing is important,

// what are the best practices when writing your tests? T
 he first is that your tests need to avoid including implementation details of your components.
 React is just a tool, and your final users will have no notion that React exists at all. Rather
 than dealing with instances of rendered React components, your tests should work with actual DOM
 nodes. Secondly, the more you test resemble the way your software is used, the more confidence they
 can give you. Finally, you also want your tests to be maintainable in the long term. As long as you're
 not changing functionality, any changes in the implementation of the component won't break your tests and
 slow you and your team down. Now

// Testing React components with Jest and React Testing Library
/* Automation tests are crucial for ensuring software quality and catching bugs early. Jest,
 a JavaScript test runner, provides an artificial DOM (JSDOM) and features like module mocking
 for standalone unit testing. React Testing Library offers utilities to test components without
 their implementation details, aligning with best practices.

 When using Create React App, Jest and React Testing Library come pre-installed and pre-configured,
 with an example test file (app.test.js) included. To test, import render and screen from React Testing
 Library, use render to display the component, and screen to query the DOM. Jest's global test function
 structures the test scenario. Use getByText to find elements by text, and expect to assert visibility.

 An example test checks for the presence of a link with the text "Little Lemon Restaurant" in the app.
 If the text is incorrect, the test fails, highlighting the error.

*/
 function App() { // This is the component we want to test.
    return (
        <div className="app">
        <a href="https:littlelemon.com">Little Orange Restaurant
        </a>
        </div>
    )
}

// Below is the code in App.test.js that tests the component.
import {render, screen} from '@testing-library/react'
import App from './App'

test("renders a screen that points to little lemon's webpage", () => {
    render(<App />)
    const linkElement = screen.getByText("Little Lemon Restaurant")
    expect(linkElement).toBeInTheDocument()
})
 /*
 Once corrected, the test passes,
 confirming the app's functionality. This demonstrates the ease of writing tests that reflect real user
 interactions and expected behaviors.

 In summary, Jest and React Testing Library simplify React component testing, ensuring reliable and maintainable tests. */

/*
The Little Lemon Restaurant needed to ensure customers left detailed feedback when giving low scores.
They updated their feedback form to require a comment when the score is below five. To safeguard this
new feature, they implemented automated tests. These tests check that the form behaves as expected and
prevents submission without a comment for low scores. The tests use mock functions and React Testing
Library utilities to simulate user interaction and validate the form's functionality. With these tests,
the restaurant can confidently make changes to their app, knowing that any issues will be caught early.
This helps the restaurant improve based on customer feedback, such as adding more cheese to their pizzas.
*/
// This is the code in App.js
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



// This is code inside app.test.js
// Jest's describe function is used to group together related tests
describe("FeedbackApp", () => {
    // Jest's test function defines an individual test case
    test("prevents form submission if score is < 5 and comment is too short", () => {
      const handleSubmit = jest.fn() // Mock function to simulate form submission
      render(<FeedbackApp onSubmit={handleSubmit} />) // Renders the FeedbackApp component

      // Simulate user input for score and comment
      fireEvent.change(screen.getByLabelText(/score/i), {target: {value: '3'}})
      fireEvent.change(screen.getByPlaceholderText("Additional feedback"), {target: {value: ''}})

      // Simulate form submission
      fireEvent.click(screen.getByRole('button', {name: /submit/i}))

      // Assert that handleSubmit has not been called because of the validation logic
      expect(handleSubmit).not.toHaveBeenCalled()
      // Assert that the submit button is indeed disabled
      expect(screen.getByRole('button', {name: /submit/i})).toHaveAttribute('disabled')
    })
  })

  
//  Solutin of exercise: Writing more test scenarios
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: ""
    });
  });
});