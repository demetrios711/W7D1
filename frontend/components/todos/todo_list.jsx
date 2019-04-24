import React from 'react';
import { TodoListItem } from './todo_list_item.jsx';
export const TodoList = (props) => (

    <div>
        <h3>Todo List goes here!</h3>
        <ul>
            {props.allTodosProp.map((todo) => <TodoListItem todo={todo} /> )}; 
        </ul>
    </div>
);

// export const TodoInterface = {

//     makeh3: TodoList = (props) => (
//         <h3>Todo List goes here!</h3>
//     ),

//     makeList: makeList = (props) => (
//         <div>
//             <ul>
//                 {props.allTodosProp.map((todo) => <TodoListItem todo={todo} /> )}; 
//             </ul>
//         </div>    
//     )

// }

// module.exports = TodoCreators;