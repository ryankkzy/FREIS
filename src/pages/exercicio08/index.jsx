import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

import { useState } from 'react';

export default function Exerci8() {

    const [temp, setTemp] = useState(0)
    const [result, setResult] = useState('')

    function medirTemperatura() {
        let situ = ''
        if (temp >= 41) {
            situ = 'A stuação para a sua temperatura é Hipertermia';
        } else if (temp >= 39.6 && temp < 41) {
            situ = 'A stuação para a sua temperatura é Febre alta';
        } else if (temp >= 37.6 && temp < 39.6) {
            situ = 'A stuação para a sua temperatura é Febre';
        } else if (temp >= 36 && temp < 37.6) {
            situ = 'A stuação para a sua temperatura é Normal';
        } else if (temp < 36) {
            situ = 'A stuação para a sua temperatura é Hipotermia';
        }

        setResult(situ)
    }

    return (
        <div className='pagina-exercicio8 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 08 - Temperatura" enunciado="Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação" faixa="8"/>
            <div className='temperaturas'>
                <img src="/assets/images/image 3.png" alt="" />
            </div>
            <div className='containerTemp'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Temperatura</label>
                        <input placeholder='0' onChange={e => setTemp(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={medirTemperatura}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{result}</h3>
        </div>
    )
}