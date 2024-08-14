import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Exerci1() {
  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [valorTotal , setValorTotal] = useState(0)


  function calcularValorTotal() {
    let total = valorPedido - valorCupom
    setValorTotal(total)
  }

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
      <div className='informacao'>
          <Link to='/'><img src="/assets/images/voltar.png" alt="" /></Link>
        <h2>Exercicio 01 - Cupom de desconto</h2>
      </div>
      <div className='faixa' />
      <div className='caixa-problema'>
        <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá <br /> de desconto.</p>
      </div>
      <div className='campos'>
        <div className='problema'>
          <label>Informe o valor do pedido</label>
          <input placeholder='0' onChange={e => setValorPedido(e.target.value)} />
        </div>
        <div className='problema'>
          <label>Informe o valor do cupom</label>
          <input placeholder='0' onChange={e => setValorCupom(e.target.value)} />
        </div>
      <div>
        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
      </div>        
      </div>
      <h3 className='resultado'>Resultado: O total é R$ {valorTotal.toFixed(2)}</h3>
    </div>
    )
}