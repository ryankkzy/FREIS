import './index.scss';

export default function NaoEncontrado() {

    return(
        <div className='pagina-nao-encontrada'>
            <div>
                <h1 className='titulo'>Desculpe, essa página não foi encontrada.</h1>
                <img className='icone' src="/assets/images/404.jpg" alt="" />
            </div>
        </div>
    )
}