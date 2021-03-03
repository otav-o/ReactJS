import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import ComFilhos from './components/ComFilhos'

ReactDOM.render (
    <div>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carslos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </div>,

    document.getElementById('root') 
)