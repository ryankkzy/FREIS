import './index.scss';
import { Link } from "react-router-dom";

export default function Informacao(props) {


    function identificarCor(){
        if(props.faixa === "1"){
            return '1'
        }
        else if(props.faixa === "2"){
            return '2'
        }
        else if(props.faixa === "3"){
            return '3'
        }
        else if(props.faixa === "4"){
            return '4'
        }
        else if(props.faixa === "5"){
            return '5'
        }
        else if(props.faixa === "6"){
            return '6'
        }
        else if(props.faixa === "7"){
            return '7'
        }
        else if(props.faixa === "8"){
            return '8'
        }
        else if(props.faixa === "9"){
            return '9'
        }
        else if(props.faixa === "10"){
            return '10'
        }
    }

    return (
        <div>
            <div className='informacao'>
                <Link to='/'><img src="/assets/images/voltar.png" alt="" /></Link>
                <h2> {props.titulo} </h2>
            </div>
            <div className={'faixa' + identificarCor()}> {props.faixa} </div>
            <div className='caixa-problema'>
                <p> {props.enunciado} <br /> {props.enunciado2} </p>
            </div>
        </div>
    )
}