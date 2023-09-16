import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

/**
 *  When we write components we use a function that receives props and return the jsx.
 *  They are regular JS functions.
 *
 *  Class-based components is an alternative to functions. Classes exist in modern JS.
 *  Class Product extends Component{ render() { return () } }
 *  Nowaday is common to use functions components instead of class-based components.
 *
 *  Traditional react used class-based components, but they can't use react hooks.
 *
 *  Component Life Cycle
 *  componentDidMount()     Called once component mounted (was evaluated and rendered) equivalent to useEffect(.., []).
 *  componentDidUpdate()    Called once component updated (was evaluated and rendered) equivalent to useEffect(.., [someValue]).
 *  componentWillUnmount()  Called right before component is unmounted (removed from DOM) equivalent to useEffect(() => {return() =>{...}}, [])
 */

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

function App() {
    const usersContext = {
        users: DUMMY_USERS,
    };

    return (
        <UsersContext.Provider value={usersContext}>
            <UserFinder />
        </UsersContext.Provider>
    );
}

export default App;
