import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

export default (props) => (
    <div className='App'>
        <Card titulo="Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Componente com parâmetro">
            <ComParametro titulo='titulo' subtitulo='subtitulo'></ComParametro>
        </Card>
        
        <Card titulo="Primeiro componente">
            <Primeiro/>
        </Card>
        
    </div>
); // por que tem que ser parênteses e não chaves?