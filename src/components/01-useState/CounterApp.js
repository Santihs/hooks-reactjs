import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    // console.log(counter);

    const { counter1, counter2 } = state;

    return (
        <>
            <h1>Counter { counter1 }</h1>   
            <h1>Counter { counter2 }</h1>   
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ () => {
                    setState({
                        ...state, /* decimos que todo se mantenga */
                        counter1: counter1 + 1, /* solo cambiamos el valor de counter1  */
                    });
                }}    
            >
                +1
            </button>
        </>
    )
}

export default CounterApp;
