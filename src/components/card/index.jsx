import './index.scss';
import { Link } from 'react-router-dom';

export default function Card(props) {

    function identificarCard() {
        if (props.card === "1") {
            return 'cardL'
        }
        else if (props.card === "2") {
            return 'cardV'
        }
        else if (props.card === "3") {
            return 'cardCiano'
        }
        else if (props.card === "4") {
            return 'cardAzul'
        }
        else if (props.card === "5") {
            return 'cardRoxo'
        }
        else if (props.card === "6") {
            return 'cardVermelho'
        }
        else if (props.card === "7") {
            return 'cardVerdeAgua'
        }
        else if (props.card === "8") {
            return 'cardPreto'
        }
        else if (props.card === "9") {
            return 'cardCinza'
        }
        else if (props.card === "10") {
            return 'cardMarrom'
        }
        else if(props.card === "11"){
            return 'cardRox'
        }
    }


    function caminho() {
        if (props.caminho === "1") {
            return '/pages/exercicio01'
        }
        else if (props.caminho === "2") {
            return '/pages/exercicio02'
        }
        else if (props.caminho === "3") {
            return '/pages/exercicio03'
        }
        else if (props.caminho === "4") {
            return '/pages/exercicio04'
        }
        else if (props.caminho === "5") {
            return '/pages/exercicio05'
        }
        else if (props.caminho === "6") {
            return '/pages/exercicio06'
        }
        else if (props.caminho === "7") {
            return '/pages/exercicio07'
        }
        else if (props.caminho === "8") {
            return '/pages/exercicio08'
        }
        else if (props.caminho === "9") {
            return '/pages/exercicio09'
        }
        else if (props.caminho === "10") {
            return '/pages/exercicio10'
        }
        else if (props.caminho === "11") {
            return '/pages/exercicio11'
        }
    }



    return (
        <div className={identificarCard()}>
            <Link to={caminho()} className='link'>
                <div className='card'>
                    <div className='retangulo cor' />
                    <h3 className='titulo'> {props.titulo} </h3>
                    <h4 className='subtitulo'> {props.subtitulo} </h4>
                </div>
            </Link>
        </div>
    )
}