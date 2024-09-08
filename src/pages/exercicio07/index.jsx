import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado'

import { useState } from 'react';


export default function Exerci07() {
    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resultado, setResultado] = useState('')

    function validacao() {

        let primaria = true

        if (cor1 === 'vermelho' || cor1 === 'azul' || cor1 === 'amarelo') {
            if (cor2 === 'vermelho' || cor2 === 'azul' || cor2 === 'amarelo') {
                primaria = true
            } else {
                primaria = false
            }
        } else {
            primaria = false
        }

        setResultado(`As cores são primárias? ${primaria}`)
    }



    return (
        <div className='pagina-exercicio7 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 07 - Cores primárias" enunciado="Implementar um programa em javascript para verificar se duas cores são primárias" faixa="7" />
            <div className='containerCor'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Cor 1</label>
                        <input placeholder='' onChange={e => setCor1(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Cor 2</label>
                        <input placeholder='' onChange={e => setCor2(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={validacao}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}