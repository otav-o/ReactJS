import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'

ReactDOM.render (
    <div>
        <Card titulo="Primeiro componente">
            <Primeiro/>
        </Card>
        
        <Card titulo="Segundo componente">
            Conteúdo 2
        </Card>
    </div>,

    document.getElementById('root') 
)