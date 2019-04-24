import React from 'react';
import TodoListContainer from './todos/todo_list_container.jsx';

const App = function(){
    return (
        <div id='todoList'>
            <h1>Todos APPPP</h1>
            <TodoListContainer />
        </div>    
    );
};

export default App;