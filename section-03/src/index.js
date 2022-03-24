//* This is the first file that will run when the appliction starts.
//* ReactDOM and React are about React and allows us to use it.
//* The ReactDOM object allows us to use render method
import ReactDOM from 'react-dom';

//* The import about CSS is different than normal JS.
import './index.css';
//* Our files or third party files
//* App is a component, will be rendered inside of the div.
import App from './App';

//* Tags looks like normal HTML but created by the developer.
//* We get the element with id of root will be selected to run our React.js App.
//* In the public folder, the index.html contains a div with the id of root, we are render our application there. Sending the <App> tag.
ReactDOM.render(<App />, document.getElementById('root'));