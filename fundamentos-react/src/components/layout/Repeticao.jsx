import React from 'react'
import produtos from '../data/produtos'

export default props => {

    function getProdutosDaLista() {
        return produtos.map(prod => { // map é para transformar em trecho de jsx
            return <li key={prod.id}>
                {prod.id} - {prod.nome} R${prod.preco}</li>
        })
    } // iteração
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosDaLista()}
            </ul>
        </div>
    )
}