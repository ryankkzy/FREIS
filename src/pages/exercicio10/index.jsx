import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

export default function Exerci10() {


    return (
        <div className='pagina-exercicio10 pagina'>
            <Cabecalho />
            <Informacao titulo="Exercício 10 - Calculo de IMC com histórico" enunciado="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final," enunciado2="apresente o IMC e a situação" faixa="10"/>
        </div>
    )
}