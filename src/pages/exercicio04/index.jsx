import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Exerci4() {
    
    const [nomeLivro, setNomeLivro] = useState('')
    const [paginas, setPaginas] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [resultado, setResultado] = useState('')

    function totalLivro() {
        let valor = paginas * tempo / 3600;

        setResultado(`Você lerá ${nomeLivro} em ${valor.toFixed(2)} horas.`)
    }





    return(
        <div className='pagina-exercicio4 pagina'>
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
                <h2>Exercicio 04 - Leitura de livro</h2>
            </div>
            <div className='faixa'/>
            <div className='caixa-problema'>
                <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em <br />  segundos de leitura por página</p>
            </div>
            <div className='containerLivro'>
                <div className='campo'>
                    <div className='problema'>
                        <label>Nome do livro</label>
                        <input placeholder='' onChange={e => setNomeLivro(e.target.value)} />
                    </div>
                    <div className='problema'>
                        <label>Total de páginas</label>
                        <input placeholder='' onChange={e => setPaginas(e.target.value)}/>
                    </div>
                    <div className='problema'>
                        <label>Tempo em segundos de leitura</label>
                        <input placeholder='' onChange={e => setTempo(e.target.value)}/>
                    </div>               
                </div>
                <div className='botao'>
                    <button className='executar' onClick={totalLivro}  >Executar</button>
                </div>
            </div>
            <h3 className='resultado'>{resultado}</h3>

        </div>
    )
}