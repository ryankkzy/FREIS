import './index.scss';
import { Link } from 'react-router-dom'

export default function Inicio() {


  return (
    <div className='pagina-inicio pagina'>
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
      <h1>Escolha um treino...</h1>
      <div className='cardL'>
          <Link to='/pages/exercicio01' className='link'>
              <div className='card'>
                <div className='retangulo laranja'/>
                   <h3 className='titulo'>Cupom de desconto</h3>
                   <h4 className='subtitulo'>Exercício 1</h4>
              </div>
            </Link>
        </div>

    </div>
  );
}
