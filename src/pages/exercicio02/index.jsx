import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

import { useState } from 'react';


export default function Exerci2() {

    const [kilo, setValorKilo] = useState(0);
    const [valorFinal, setValorFinal] = useState('');

    function converter() {
        let gramas = kilo * 1000
        setValorFinal(`Resultado: O resultado é ${gramas} gramas`)
    }

    return (
        <div className='pagina-exercicio2 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 02 - Converter Kg/gramas" enunciado="Implementar um programa em Javascript para converter kilos em gramas." faixa="2"/>
            <div className='campos'>
                <div className='problema'>
                    <label>Valor em kilos</label>
                    <input placeholder='0' onChange={e => setValorKilo(e.target.value)} />
                </div>
                <div>
                    <button href='#' className='executar' onClick={converter}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{valorFinal}</h3>
        </div>
    )
}