import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <li className="list-group-item">
            <p 
                className={ `${ todo.done && 'complete' }` }
                onClick={ () => handleToggle( todo.id ) }
            >
                { i + 1 }. { todo.desc }
            </p>
            <button                                        
                className="btn btn-danger"
                onClick={ (e) => handleDelete(e,todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todos: PropTypes.object,
    i: PropTypes.number,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}
