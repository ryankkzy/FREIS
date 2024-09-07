import './index.scss';
import Informacao from '../../components/enunciado'
import Cabecalho from '../../components/cabecalho';

import { useState } from 'react';

export default function Exerci6() {

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resultado, setResultado] = useState('')


    function calcularSalario() {
        let totalSalario = Number(bonus) / 100 * Number(salario) + Number(salario) - Number(desconto)

        setResultado(`Seu salário liquido é de R$${totalSalario}`)
    }

    return (
        <div className='pagina-exercicio6 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 06 - Salário líquido" enunciado="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de" enunciado2="descontos em reais." faixa="6"/>
            <div className='containerSalario'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Salário base</label>
                        <input placeholder='0' onChange={e => setSalario(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Bônus mensal em porcentagem</label>
                        <input placeholder='0' onChange={e => setBonus(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Total de descontos</label>
                        <input placeholder='0' onChange={e => setDesconto(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={calcularSalario}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}