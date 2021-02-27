
const initialState = [{
    id: 1,
    todo: 'Comprar queso',
    done: false,
}];

const todoReducer = ( state = initialState, action ) => { /* las acciones son las que modifican el state */

    if( action?.type === 'agregar'){ /* con el ? le decimos que lo lea si el accion tiene algun valor */
        return [...state, action.payload]
    }

    return state; /* esto es considerado un reducer, porque regresa un nuevo estado */
};

let todos = todoReducer();

// no podemos modificar directamente nuestro state, eso romperia la app
//  NO USAR EL PUSH SI TRABAJO EN REACT para no mutar el objeto
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false,
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer( todos, agregarTodoAction );


console.log(todos);