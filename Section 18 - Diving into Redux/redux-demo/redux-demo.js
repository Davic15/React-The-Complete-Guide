const redux = require('redux');

const counterReducer = (currentState = { counter : 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: currentState.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: currentState.counter - 1
        };
    }

    return currentState
   
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });