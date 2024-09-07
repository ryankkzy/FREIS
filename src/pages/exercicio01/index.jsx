import './index.scss'
import Cabecalho from '../../components/cabecalho';
import Informacao from '../../components/enunciado';

import { useState } from 'react'

export default function Exerci1() {
  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [valorTotal, setValorTotal] = useState('')


  function calcularValorTotal() {
    let total = valorPedido - valorCupom
    setValorTotal(`Resultado: O total é R$ ${total.toFixed(2)}`)
  }

  return (
    <div className='pagina-exercicio1 pagina'>
      <Cabecalho />
      <Informacao titulo="Exercício 01 - Cupom de desconto" enunciado="Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá " enunciado2="de desconto." faixa="1"/>
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
      <h3 className='resultado'>{valorTotal}</h3>
    </div>
  )
}