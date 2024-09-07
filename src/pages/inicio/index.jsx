import './index.scss';
import Cabecalho from '../../components/cabecalho';

import { Link } from 'react-router-dom';

export default function Inicio() {


  return (
    <div className='pagina-inicio pagina'>
      <Cabecalho />
      <h1>Escolha um treino...</h1>
      <div className='containerPrincipal'>
        <div className='cardL'>
          <Link to='/pages/exercicio01' className='link'>
            <div className='card'>
              <div className='retangulo laranja' />
              <h3 className='titulo'>Cupom de desconto</h3>
              <h4 className='subtitulo'>Exercício 1</h4>
            </div>
          </Link>
        </div>

        <div className='cardV'>
          <Link to='/pages/exercicio02' className='link'>
            <div className='card'>
              <div className='retangulo verde' />
              <h3 className='titulo'>Converter KG/gramas</h3>
              <h4 className='subtitulo'>Exercício 2</h4>
            </div>
          </Link>
        </div>

        <div className='cardCiano'>
          <Link to='/pages/exercicio03' className='link'>
            <div className='card'>
              <div className='retangulo ciano' />
              <h3 className='titulo'>Valor total por quantidade</h3>
              <h4 className='subtitulo'>Exercício 3</h4>
            </div>
          </Link>
        </div>

        <div className='cardAzul'>
          <Link to='/pages/exercicio04' className='link'>
            <div className='card'>
              <div className='retangulo azul' />
              <h3 className='titulo'>Leitura de livro</h3>
              <h4 className='subtitulo'>Exercício 4</h4>
            </div>
          </Link>
        </div>

        <div className='cardRoxo'>
          <Link to='/pages/exercicio05' className='link'>
            <div className='card'>
              <div className='retangulo roxo' />
              <h3 className='titulo'>Média de notas</h3>
              <h4 className='subtitulo'>Exercício 5</h4>
            </div>
          </Link>
        </div>

        <div className='cardVermelho'>
          <Link to='/pages/exercicio06' className='link'>
            <div className='card'>
              <div className='retangulo vermelho' />
              <h3 className='titulo'>Salário liquido</h3>
              <h4 className='subtitulo'>Exercício 6</h4>
            </div>
          </Link>
        </div>

        <div className='cardVerdeAgua'>
          <Link to='/pages/exercicio07' className='link'>
            <div className='card'>
              <div className='retangulo verdeAgua' />
              <h3 className='titulo'>Cores primárias</h3>
              <h4 className='subtitulo'>Exercício 7</h4>
            </div>
          </Link>
        </div>

        <div className='cardPreto'>
          <Link to='/pages/exercicio08' className='link'>
            <div className='card'>
              <div className='retangulo preto' />
              <h3 className='titulo'>Temperatura</h3>
              <h4 className='subtitulo'>Exercício 8</h4>
            </div>
          </Link>
        </div>

        <div className='cardCinza'>
          <Link to='/pages/exercicio09' className='link'>
            <div className='card'>
              <div className='retangulo cinza' />
              <h3 className='titulo'>Sorveteria</h3>
              <h4 className='subtitulo'>Exercício 9</h4>
            </div>
          </Link>
        </div>

        <div className='cardMarrom'>
          <Link to='/pages/exercicio10' className='link'>
            <div className='card'>
              <div className='retangulo marrom' />
              <h3 className='titulo'>Calculo de IMC com histórico</h3>
              <h4 className='subtitulo'>Exercício 10</h4>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
