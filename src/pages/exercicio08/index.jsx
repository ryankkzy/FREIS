import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Exerci8() {

    const [temp, setTemp] = useState(0)
    const [result, setResult] = useState('')

    function medirTemperatura() {
        let situ = ''
        if (temp >= 41) {
            situ = 'A stuação para a sua temperatura é Hipertermia';
        } else if (temp >= 39.6 && temp < 41) {
            situ = 'A stuação para a sua temperatura é Febre alta';
        } else if (temp >= 37.6 && temp < 39.6) {
            situ = 'A stuação para a sua temperatura é Febre';
        } else if (temp >= 36 && temp < 37.6) {
            situ = 'A stuação para a sua temperatura é Normal';
        } else if (temp < 36) {
            situ = 'A stuação para a sua temperatura é Hipotermia';
        }

        setResult(situ)
    }

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
            <div className='temperaturas'>
                <img src="/assets/images/image 3.png" alt="" />
            </div>
            <div className='containerTemp'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Temperatura</label>
                        <input placeholder='0' onChange={e => setTemp(e.target.value)} />
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={medirTemperatura}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{result}</h3>
        </div>
    )
}