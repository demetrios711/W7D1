import {merge} from 'lodash';
import { RECEIVE_TODOS, RECEIVE_TODO, receiveTodos, receiveTodo} from '../actions/todo_actions.js';

const initialState = {
    1: {
        id: 1,
            title: 'wash car',
                body: 'with soap',
                    done: false
    },
    2: {
        id: 2,
            title: 'wash dog',
                body: 'with shampoo',
                    done: true
    },
}

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    // debugger
    switch (action.type) {

        case RECEIVE_TODO:
            newState[action.todo.id] = action.todo;
            return newState;
        case RECEIVE_TODOS: //[todo1, todo2, todo3]
            debugger
            // const keys = Object.keys(action.todos);
            // keys.forEach(todo_id => { 
            //     newState[todo_id] = action.todos[todo_id]
            // })
            // action.todos.forEach(todo => {
            //     newState[todo.id] = todo;
            // });
            // action.todos.map(todo => {
            //     newState[todo.id] = todo;
            // });

            console.log(JSON.parse(JSON.stringify(action.todos)));
            return newState;
        default:
            return state;
    }
};

export default todosReducer;
