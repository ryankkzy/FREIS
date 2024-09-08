import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './pages/sobre';
import Inicio from './pages/inicio';
import NaoEncontrado from './pages/nao-encontrado';
import Exerci1 from './pages/exercicio01';
import Exerci2 from './pages/exercicio02';
import Exerci3 from './pages/exercicio03';
import Exerci4 from './pages/exercicio04';
import Exerci5 from './pages/exercicio05';
import Exerci6 from './pages/exercicio06';
import Exerci7 from './pages/exercicio07';
import Exerci8 from './pages/exercicio08';
import Exerci9 from './pages/exercicio09';
import Exerci10 from './pages/exercicio10';
import Exerci11 from './pages/exercicio11';

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
                <Route path='/pages/exercicio06' element={<Exerci6 />} />
                <Route path='/pages/exercicio07' element={<Exerci7 />} />
                <Route path='/pages/exercicio08' element={<Exerci8 />} />
                <Route path='/pages/exercicio09' element={<Exerci9 />} />
                <Route path='/pages/exercicio10' element={<Exerci10 />} />
                <Route path='/pages/exercicio11' element={<Exerci11 />} />

                <Route path='*' element={<NaoEncontrado />} />
            </Routes>
        </BrowserRouter>
    )
}