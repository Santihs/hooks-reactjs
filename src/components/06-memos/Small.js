import React, { memo } from 'react'; // memorizamos este objeto, para que no lo vuelv a dibujar, se renderiza solo si sus props cambian

export const Small = memo(({ values }) => {

    console.log('Me volvi a llamar :(');

    return (
        <small>
            { values }
        </small>
    )
})
