import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Exerci9() {

    const[gramas, setGramas] = useState(0)
    const[resultado, setResultado] = useState('')

    function calcularPrecoSorvete() {
        let valor = 0
        let exibicao = ''
        if(gramas < 1000 && gramas >= 1){
            valor = gramas * 3.5 / 100
            exibicao = `O total a pagar é R$${valor}`;
        } else if(gramas >= 1000){
            valor = gramas * 3 / 100
            exibicao = `O total a pagar é R$${valor}`;
        } else {
            exibicao = 'Peso inválido!';
        }

        setResultado(exibicao)
    }

    return (
        <div className='pagina-exercicio9 pagina'>
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
                <h2>Exercicio 09 - Sorveteria</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 <br /> mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.</p>
            </div>
            <div className='containerSorvete'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Total de gramas</label>
                        <input placeholder='0' onChange={e => setGramas(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={calcularPrecoSorvete}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}