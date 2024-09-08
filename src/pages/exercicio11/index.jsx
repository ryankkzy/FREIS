import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';
import { useState } from 'react';

export default function Exerci11() {

    const [numero, setNumero] = useState(0);
    const [tabuadas, setTabuadas] = useState([]);


    function exibirTabuada() {

        let tabuada = [];

        for (let contador = 0; contador <= 10; contador++) {

            let valorConta = numero * contador
            let exibir = `${numero} X ${contador} = ${valorConta}`
            tabuada.push(exibir)
        }

        setNumero('')
        setTabuadas(tabuada)
    }

    return (
        <div className='pagina-exercicio11 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 11 - Tabuada" enunciado="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”." faixa="11" />
            <div className='a'>
                <div className='containerTabuada'>
                    <div className='campo'>
                        <div className='problema'>
                            <label>Tabuada do:</label>
                            <input placeholder='0' value={numero} onChange={e => setNumero(e.target.value)} />
                        </div>
                        <div className='botao'>
                            <button className='executar' onClick={exibirTabuada} >Executar</button>
                        </div>
                    </div>
                    <div className='tabuada'>
                        {tabuadas.map(item =>
                            <h4> {item} </h4>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}