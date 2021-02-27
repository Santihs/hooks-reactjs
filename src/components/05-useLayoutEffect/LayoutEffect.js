import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);    

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    
    const { quote } = !!data && data[0]; /* es para poner un valor de undefined, y no trabajar con null */

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [ quote ])

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ increment } 
            >
                Siguiente Quote
            </button>

        </div>
    )
}
