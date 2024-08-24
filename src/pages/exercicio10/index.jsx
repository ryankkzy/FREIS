import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerci10() {


    return (
        <div className='pagina-exercicio10 pagina'>
            <header>
                <div className='containerAzul'>
                    <div className='imagemTitulo'>
                        <div>
                            <img className='image' src="/assets/images/image 1.png" alt="" />
                        </div>
                        <div>
                            <h1>React FreiS</h1>
                        </div>
                    </div>
                    <div className='container2'>
                        <Link to='/'>Inicio</Link>
                        <Link to='/pages/sobre'>Sobre</Link>
                    </div>
                </div>
            </header>
            <div className='informacao'>
                <Link to='/'><img src="/assets/images/voltar.png" alt="" /></Link>
                <h2>Exercicio 10 - Calculo de IMC com histórico</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, <br />apresente o IMC e a situação</p>
            </div>
        </div>
    )
}