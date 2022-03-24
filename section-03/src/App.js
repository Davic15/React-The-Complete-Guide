//* App function, starts with uppercase name.
//* HTML code inside JavaScript code.
//* This done by JSX, special syntax.
//* JSX = JavaScript XML, translate the code to be displayed in the browser.
//* With react we can generate out HTML without write too much code.
//* New Component in new files
//* The App component will render into single HTML page. the other components will come after App component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

//* The function is exported here
export default App;