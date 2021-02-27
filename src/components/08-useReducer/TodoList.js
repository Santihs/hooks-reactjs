import React from 'react';
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (
                    <TodoListItem
                        key={ todo.id }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                        todo={ todo }
                        i={ i }
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}