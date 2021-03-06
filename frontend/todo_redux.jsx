import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import Root from './components/root';
import {allTodos} from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded",() => {
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, document.getElementById("app"));
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos(store.getState());
});

