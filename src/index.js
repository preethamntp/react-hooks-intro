import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
 
import TodosContext from './combiningReducer-Context/context';
import todosReducer from './combiningReducer-Context/reducer';


import * as serviceWorker from './serviceWorker';
import TodoList from './Components/TodoList';
import ToDoForm from './Components/ToDoForm';

const App = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, initialState)

    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            <ToDoForm/>
            <TodoList />
        </TodosContext.Provider>
    )
}

ReactDOM.render(
    < App />
    , document.getElementById('root'));

 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();