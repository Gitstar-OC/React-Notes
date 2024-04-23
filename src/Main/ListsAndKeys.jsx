// Lists are used to make writing code easier and to map through function to sort data
// The map function is used to do so

const data = [
  {
    id: 1 ,
    title: "Pizza",
    description: "A delicious pizza with a crispy crust and your choice of toppings.",
    price: 10,
    image: "https://dummyimage.com/600x400/000/fff.png&text=Pizza",
  },
  {
    id: 2,
    title: "Burger",
    description: "A juicy burger with your  choice of toppings.",
    price: 12,
    image: "https://dummyimage.com/600x400/000/fff.png&text=Burger",
  },
  {
    id: 3,
    title: "Pasta",
    description: "A delicious pasta dish with your choice of sauce.",
    price: 14,
    image: "https://dummyimage.com/600x400/000/fff.png&text=Pasta",
  },
  {
    id : 4,
    title: "Tacos",
    description: "A delicious taco with your choice of fillings.",
    price: 8,
    image: "https://dummyimage.com/600x400/000/fff.png&text=Tacos",
  },
  {
    id: 5,
    title: "Salad",
    description: "A delicious salad with your choice of toppings.",
    price: 10,
    image: "https://dummyimage.com/600x400/000/fff.png&text=Salad",
  },
];


// The following is the example of mapping method used to write lists

function App() {

    const listItems = data.map(dessert => {
        const itemText = `${desert.title} - ${desert.price}`
        return <li>{itemText}</li>
    })

    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}


// The following is my code for the solution of the steps given in create a basic lists component
// Here data is given as props

function DessertsList(props) {
    // Implement the component here.
    const result = props.calories.filter((calories) => calories <= 500);
    result.sort((a, b) => a.title.localeCompare(b.title));
    const desert = result.map(desert => {
      const itemText = `${desert.title} - ${desert.price}`;
      return <li>{itemText}</li>;
    });
    return <ul>{desert}</ul>;
  }
  export default DessertsList ;



// And this is the real solution for it
const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
      .filter((dessert) => {
        return dessert.calories < 500;
      })
      .sort((a, b) => {
        return a.calories - b.calories;
      })
      .map((dessert) => {
        return (
          <li>
            {dessert.name} - {dessert.calories} cal
          </li>
        );
      });
    return <ul>{lowCaloriesDesserts}</ul>;
}

export default DessertsList;



// The below is for keys

// Keys are identifier's that help React to determine which items have
// changed or added or are removed. They also instruct how to treat a
// specific element when an update occurs and whether its internal state
// should be preserved or not.


// Imagine the drink section in the little lemon online menu where restaurant
// managers can add new drinks depending on the season. When they add a new
// element at the end of the list, the different algorithm works well, since
// React will match the two beer trees, match the two wine trees, and then
// insert the cider tree. However, when inserting a new element at the
// beginning of the list, the algorithm offers worse performance because
// React will mutate every child instead of realizing it can keep the beer and
// wine sub trees intact. This inefficiency can be a problem. To solve this issue
// , React supports a key attribute.


// The below code will cause a huge time becauase react will have to update each
// tree module and change the whole app due to one change before.

<ul>
  <li>Beer</li>
  <li>Cider</li>
</ul>

<ul>
  <li>Wine</li>
  <li>Beer</li>
  <li>Cider</li>
</ul>


// To fix this keys are used

<li key="wine">Wine</li>
<li key="beer">Beer</li>
<li key="cider">Cider</li>

// The general rule of thumb with keys is to use a stable identifier that is
// unique among its siblings. This allows React to reuse as many elements from the
// list as possible, avoiding unnecessary recreations, especially when their
// content is exactly the same and the only thing that has changed is their
// position in the list. The key used most often is a unique ID that comes from
// your data. Those IDs typically mirror a database ID, which has an ID given to
// an item in a database that by nature is guaranteed to be unique.


// When used incorrectly, keys can negatively impact performance and may cause unexpected
// glitches in your UI when updating your list. That's why it is very important to make a
// conscious decision about your key's implementation.

// Make sure key is unique and don't use indexes if possible


// The following is an example of using lists with keys
// The example is of a todo lists app that with the use of a button reverse, reverses the
// tasks created

import {useState} from "react"

const Todo = props => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      < input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
)

function TodoApp() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00'}, {
    id: "todo2",
    createdAt: "20:30"
  }])

  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first
    setTodos([...todos].reverse())
  }

  // First example with keys, show browser console to see the warning.
  return (
  <div>
    <button onClick={reverseOrder}>Reverse</button>
    <table>
      <tbody>
        {todos.map((todo, index) => (
        {/* If the key is set to the index then when the application run's it will not
change the input, it will only change the other things. So to make this work we need to
replace key={index} with the key={todo.id} and then it will change*/}
        <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
        ))}
      </tbody>
    </table>
  </div>
  );
}



















