import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Exerci2() {

    const [kilo, setValorKilo] = useState(0);
    const [valorFinal, setValorFinal] = useState(0);

    function converter() {
        let gramas = kilo * 1000
        setValorFinal(gramas)
    }

    return (
        <div className='pagina-exercicio2 pagina'>
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
                <h2>Exercicio 02 - Converter KG/gramas</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implementar um programa em Javascript para converter kilos em gramas.</p>
            </div>
            <div className='campos'>
                <div className='problema'>
                    <label>Valor em kilos</label>
                    <input placeholder='0' onChange={e => setValorKilo(e.target.value)} />
                </div>
                <div>
                    <button href='#' className='executar' onClick={converter}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>Resultado: O resultado é {valorFinal} gramas</h3>
        </div>
    )
}