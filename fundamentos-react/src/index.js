import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render (
    <div>
        <Primeiro/>
        <ComParametro titulo="Esse é o título"
         subtitulo="Esse é o subtítulo"></ComParametro>
    </div>, // lembrando que não pode jogar no root dois elementos adjacentes

    document.getElementById('root') 
)