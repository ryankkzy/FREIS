import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './pages/sobre';
import Inicio from './pages/inicio';
import NaoEncontrado from './pages/nao-encontrado';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/pages/sobre' element={<Sobre />} />

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}