import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerci5() {


    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [resultado, setResultado] = useState(0)

    function totalNota() {
        let passou = true
        let media = (nota1 + nota2 + nota3) / 3

        if(media < 6 ){
            passou = false
            return passou
        }

        setResultado(media)
    }




    return(
        <div className='pagina-exercicio5 pagina'>
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
                <h2>Exercicio 05 - Leitura de livro</h2>
            </div>
            <div className='faixa' />
            <div className='caixa-problema'>
                <p>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
            </div>
            <div className='containerNota'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Nota 1</label>
                        <input placeholder='0' onChange={e => setNota1(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Nota 2</label>
                        <input placeholder='0' onChange={e => setNota2(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Nota 3</label>
                        <input placeholder='0' onChange={e => setNota3(e.target.value)}/>
                    </div>               
                </div>
                <div className='botao'>
                    <button className='executar' onClick={totalNota}>Executar</button>
                </div>
            </div>
            <h3 className='resultado'>A média do aluno é {resultado}</h3>
        </div>
    )
}