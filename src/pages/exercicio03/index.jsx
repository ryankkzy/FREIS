import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

import { useState } from 'react';

export default function Exerci3() {

    const [qtdPequeno, setQtdPequeno] = useState(0)
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [resultado, setResultado] = useState('')

    function total() {
        let valorP = qtdPequeno * 13.5;
        let valorM = qtdMedio * 15;
        let valorG = qtdGrande * 17.5;

        let totalPagar = valorP + valorM + valorG
        setResultado(`Resultado: O total a pagar é de ${totalPagar.toFixed(2)}`)
    }

    return (
        <div className='pagina-exercicio3 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 03 - Valor total por quantidade" enunciado="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande," enunciado2="sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente." faixa="3"/>
            <div className='containerConta'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Quantidade pequeno</label>
                        <input placeholder='0' onChange={e => setQtdPequeno(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Quantidade Medio</label>
                        <input placeholder='0' onChange={e => setQtdMedio(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Quantidade grande</label>
                        <input placeholder='0' onChange={e => setQtdGrande(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={total}>Executar</button>
                </div>
            </div>

            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}