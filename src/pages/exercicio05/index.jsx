import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

import { useState } from 'react';

export default function Exerci5() {


    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [resultado, setResultado] = useState('');
    const [avaliado, setAvaliado] = useState('');

    function totalNota() {
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / Number(3);
        setResultado(`A média do aluno é ${media.toFixed(0)}`);


        let passou = true;
        if (media < 6) {
            passou = false;
        }

        setAvaliado(`O aluno passou? ${passou}`);
    }





    return (
        <div className='pagina-exercicio5 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 05 - Média de notas" enunciado="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6." faixa="5"/>
            <div className='containerNota'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Nota 1</label>
                        <input placeholder='0' onChange={e => setNota1(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Nota 2</label>
                        <input placeholder='0' onChange={e => setNota2(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Nota 3</label>
                        <input placeholder='0' onChange={e => setNota3(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={totalNota}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
            <h3 className='resultado'>{avaliado}</h3>
        </div>
    )
}