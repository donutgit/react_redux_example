const redux = require('redux');
const createStore = redux.createStore; // = not executed function

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (currState = initialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      ...currState,
      counter: currState.counter + 1
    }
  }
  if(action.type === 'ADD_COUNTER') {
    return {
      ...currState,
      counter: currState.counter + action.value
    }
  }
  return currState;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

// subscription
store.subscribe(() => {
  console.log('[subscription] ', store.getState())
})
// subscribe going before dispatching actions. Subscribtion triggers whenever the state updates

// dispatching action
store.dispatch({
  type: 'INC_COUNTER'
})

console.log(store.getState())

store.dispatch({
  type: 'ADD_COUNTER',
  value: 10
})
console.log(store.getState())


