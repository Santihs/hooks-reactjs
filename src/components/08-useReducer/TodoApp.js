import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

// debemos definir nuestro estado inicial fuera
// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
// }]

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect( () => {

        localStorage.setItem('todos', JSON.stringify( todos ))

    }, [ todos ]);

    const handleDelete = (e, todoId) => {
        e.preventDefault();

        const action = {
            type: 'delete',
            payload: todoId,
        };

        dispatch( action );
    }

    const handleToggle = ( todoId) => {

        dispatch({
            type:'toggle',
            payload: todoId,
        })

    }

    const handleAddTodo = ( newTodo ) => {

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action ); // mandamos aca la accion que mutara nuestro todos

    }

    return (
        <div>
            <h1>Todo App ( {  todos.length } )</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList  
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                
                </div>
            </div>

        </div>
    )
}
