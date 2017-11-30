const root = document['getElementsByClassName']('counter')[0];

// 1- REDUCER (for responding actions)
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
            break;
        case 'DECREMENT':
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

const { createStore } = Redux;
//2- STORE
const store = createStore(counter);

//3- CALLING EVENT
document.addEventListener('click', () => {

    //4- DISPATCHING ACTION (connecting action with reducer)
    store.dispatch({ type: 'INCREMENT' });

});

const render = () => {
    root.innerText = store.getState();
}

//5- SUBSCRIBE (it returns a callback everytime the action has been dispatched)
store.subscribe(render);
render(); //get initial state