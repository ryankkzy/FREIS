import './index.scss'
import { Link } from 'react-router-dom'
export default function Exerci1() {

    return(
    <div className='pagina-exercicio1 pagina'>
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
    </div>
    )
}