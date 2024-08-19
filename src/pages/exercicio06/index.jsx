import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerci6() {

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resultado, setResultado] = useState('')


    function calcularSalario(){
        let totalSalario = Number(bonus) / 100 * Number(salario) + Number(salario) - Number(desconto)

        setResultado(`Seu salário liquido é de R$${totalSalario}`)
    }

    return (
        <div className='pagina-exercicio6 pagina'>
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
                <h2>Exercicio 06 - Salário liquido</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de <br /> descontos em reais</p>
            </div>
            <div className='containerSalario'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Salário base</label>
                        <input placeholder='0' onChange={e => setSalario(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Bônus mensal em porcentagem</label>
                        <input placeholder='0' onChange={e => setBonus(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Total de descontos</label>
                        <input placeholder='0' onChange={e => setDesconto(e.target.value)}/>
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={calcularSalario}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}