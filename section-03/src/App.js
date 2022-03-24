//* App function, starts with uppercase name.
//* HTML code inside JavaScript code.
//* This done by JSX, special syntax.
//* JSX = JavaScript XML, translate the code to be displayed in the browser.
//* With react we can generate out HTML without write too much code.
//* New Component in new files
//* The App component will render into single HTML page. the other components will come after App component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car insurance', 
      amount: 294.67, 
      date: new Date(2022, 0, 24)
    },
    {
      id: 'e2',
      title: 'Toilet Paper', 
      amount: 94.12, 
      date: new Date(2022, 2, 12)
    },
    {
      id: 'e3',
      title: 'New Tv', 
      amount: 500.25, 
      date: new Date(2022, 1, 14)
    },
    {
      id: 'e4',
      title: 'New Desk', 
      amount: 150.55, 
      date: new Date(2022, 0, 31)
    }
  ];
  //* Send data (props), in the component we can access them with props.title, props.amount, props.date
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
      />
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
      />
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}
      />
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}
      />
    </div>
  );
}

//* The function is exported here
export default App;