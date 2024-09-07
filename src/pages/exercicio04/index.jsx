import './index.scss';
import Informacao from '../../components/enunciado'
import Cabecalho from '../../components/cabecalho';

import { useState } from 'react';


export default function Exerci4() {

    const [nomeLivro, setNomeLivro] = useState('')
    const [paginas, setPaginas] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [resultado, setResultado] = useState('')

    function totalLivro() {
        let valor = paginas * tempo / 3600;

        setResultado(`Você lerá ${nomeLivro} em ${valor.toFixed(2)} horas.`)
    }


    return (
        <div className='pagina-exercicio4 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 04 - Leitura de livro" enunciado="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em" enunciado2="segundos de leitura por página." faixa="4"/>
            <div className='containerLivro'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Nome do livro</label>
                        <input placeholder='Digite a mensagem.' onChange={e => setNomeLivro(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Total de páginas</label>
                        <input placeholder='0' onChange={e => setPaginas(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Tempo em segundos de leitura</label>
                        <input placeholder='0' onChange={e => setTempo(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={totalLivro}  >Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>

        </div>
    )
}