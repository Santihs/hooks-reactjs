import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './CounterApp.css';

const CounterWithCustomHook = () => {

    // usamos un custom hook para no mezcalra la logica con los jsx y poder tener un codigo mas legible
    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hook: { state }</h1>   
            <hr/>

            <button onClick={ () => increment(2) } className="btn btn-primary">+ 1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ () => decrement(3) } className="btn btn-secondary">- 1</button>
        </>
    )
}

export default CounterWithCustomHook;
