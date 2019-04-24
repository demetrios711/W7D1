import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors.js';
import { TodoList } from './todo_list.jsx';

const mapStateToProps = (state) => ({
    allTodosProp: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    // deleteToto: id => dispatch(deleteTodo(id)),
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);