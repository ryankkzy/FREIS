import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Exerci3() {

    const [qtdPequeno, setQtdPequeno] = useState(0)
    const [qtdMedio, setQtdMedio] = useState(0);
    const [qtdGrande, setQtdGrande] = useState(0);
    const [resultado, setResultado] = useState(0)

    function total() {
        let valorP = qtdPequeno * 13.5;
        let valorM = qtdMedio * 15;
        let valorG = qtdGrande * 17.5;

        let totalPagar = valorP + valorM + valorG
        setResultado(totalPagar)
    }

    return (
        <div className='pagina-exercicio3 pagina'>
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
                <h2>Exercicio 03 - Valor total por quantidade</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, <br />sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</p>
            </div>
            <div className='containerConta'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Quantidade pequeno</label>
                        <input placeholder='0' onChange={e => setQtdPequeno(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Quantidade Medio</label>
                        <input placeholder='0' onChange={e => setQtdMedio(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Quantidade grande</label>
                        <input placeholder='0' onChange={e => setQtdGrande(e.target.value)}/>
                    </div>               
                </div>
                <div className='botao'>
                    <button className='executar' onClick={total}>Executar</button>
                </div>
            </div>

            <h3 className='resultado'>Resultado: O total é R$ {resultado.toFixed(2)}</h3>
        </div>
    )
}