import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Exerci07() {
    const[cor1,setCor1] = useState('') 
    const[cor2,setCor2] = useState('') 
    const[resultado,setResultado] = useState('')

    function validacao(){

        let primaria = true

        if(cor1 === 'vermelho' || cor1 === 'azul' || cor1 === 'amarelo'){
            if(cor2 === 'vermelho' || cor2 === 'azul' || cor2 === 'amarelo'){
                primaria = true
            } else {
                primaria = false
            }
        } else {
            primaria = false
        }

        setResultado(`As cores são primárias? ${primaria}`)
    }



    return (
        <div className='pagina-exercicio7 pagina'>
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
                <h2>Exercicio 07 - Cores primárias</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implementar um programa em javascript para verificar se duas cores são primárias</p>
            </div>
            <div className='containerCor'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Cor 1</label>
                        <input placeholder='' onChange={e => setCor1(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Cor 2</label>
                        <input placeholder='' onChange={e => setCor2(e.target.value)}/>
                    </div>
                </div>
                <div className='botao'>
                    <button className='executar' onClick={validacao}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>
        </div>
    )
}