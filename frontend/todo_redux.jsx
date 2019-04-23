import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';

const Todo = <h1> Todos App </h1>;

document.addEventListener("DOMContentLoaded",() => {
    ReactDOM.render(Todo, document.getElementById("app"));
    window.store = configureStore();
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
});

