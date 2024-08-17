import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './pages/sobre';
import Inicio from './pages/inicio';
import NaoEncontrado from './pages/nao-encontrado';
import Exerci1 from './pages/exercicio01';
import Exerci2 from './pages/exercicio02';
import Exerci3 from './pages/exercicio03';
import Exerci4 from './pages/exercicio04';
import Exerci5 from './pages/exercicio05';

export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/pages/sobre' element={<Sobre />} />
                <Route path='/pages/exercicio01' element={<Exerci1 />} />
                <Route path='/pages/exercicio02' element={<Exerci2 />} />
                <Route path='/pages/exercicio03' element={<Exerci3 />} />
                <Route path='/pages/exercicio04' element={<Exerci4 />} />
                <Route path='/pages/exercicio05' element={<Exerci5 />} />

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}