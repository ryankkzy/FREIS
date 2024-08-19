import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerci8() {

    return (
        <div className='pagina-exercicio8 pagina'>
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
                <h2>Exercicio 08 - Temperatura</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação</p>
            </div>
        </div>
    )
}