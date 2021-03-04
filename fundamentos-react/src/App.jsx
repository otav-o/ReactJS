import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Repeticao from './components/layout/Repeticao' // os diretórios estão todos desorganizados
import Condicional from './components/layout/Condicional'
import CondicionalComIf from './components/layout/CondicionalComIf'

export default (props) => (
    <div className='App'>

        <Card titulo="CondicionalComIf">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>

        <Card titulo="Condicional">
            <Condicional numero={3}></Condicional>
        </Card>
        {/* número é passado entre chaves no jsx */}

        <Card titulo="Componente de produtos">
            <Repeticao/>
        </Card>

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