import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';
import { useState } from 'react';

export default function Exerci10() {


    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [listaSituacao, setListaSituacao] = useState([])


    function adicionarSituacao() {

        let IMC = peso / (altura*altura)

        let situacao = ''


        if (IMC>=40) {
            situacao = `Situação: obesidade grau III`;
        }
        
        else if (IMC>=35 && IMC<=39.9) {
            situacao = `Situação: obesidade grau II`;
        }
        
        else if (IMC>=30 && IMC<=34.9) {
            situacao = `Situação: obesidade grau I`;
        }
        
        else if (IMC>=25 && IMC<=29.9) {
            situacao = `Situação: sobrepeso`;
        } 
        
        else if (IMC>=18.5 && IMC<=24.9) {
            situacao = `Situação: peso normal`;
        }
        
        else if (IMC<18.5) {
            situacao = `Situação: abaixo do peso `;
        }



        let novaSituacao = {
            altura: 'Altura: ' + altura,
            peso: 'Peso: ' + peso,
            situacao: situacao
        }

        setListaSituacao([...listaSituacao, novaSituacao])

        setAltura('')
        setPeso('')
    }

    function apagarImc(pos){
        listaSituacao.splice(pos, 1)
        setListaSituacao([...listaSituacao])
    }
  

    return (
        <div className='pagina-exercicio10 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 10 - Calculo de IMC com histórico" enunciado="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final," enunciado2="apresente o IMC e a situação" faixa="10" />
            <div className='containerIMC'>
                <div className='entrada'>
                    <div className='campo'>
                        <div className='problema'>
                            <label>Altura</label>
                            <input placeholder='0' value={altura} onChange={e => setAltura(e.target.value)} />
                        </div>
                        <div className='problema'>
                            <label>Peso</label>
                            <input placeholder='0' value={peso} onChange={e => setPeso(e.target.value)} />
                        </div>
                    </div>
                    <div className='botao'>
                        <button className='executar' onClick={adicionarSituacao}>Executar</button>
                    </div>
                </div>

                <div className='situacao'>
                    {listaSituacao.map((item, pos )=>
                        <div className='alinhamento'>
                            <div className='informacoes'>
                                <h4>{item.altura}</h4> <h4>{item.peso}</h4> <h4>{item.situacao}</h4>
                            </div>
                            <div className='icone'>
                                <img src="../assets/images/lixo.png" alt="" onClick={() => apagarImc(pos)} />
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}