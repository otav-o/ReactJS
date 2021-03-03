import React from 'react'

export default alface => // serve qualquer nome, mas por padrão usa-se prop
    <>
        <h3>{alface.titulo}</h3>
        <p>{alface.subtitulo}</p>
        <p>{1 + 2}</p>
        <p>{Array(10).fill(0)}</p>
    </>