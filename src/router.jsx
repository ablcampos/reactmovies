import { Routes,Route } from "react-router-dom";
import { Inicio } from './pages/Inicio'
import { Filmes } from "./pages/Filmes";
import { Series } from "./pages/Series";
import { Erro } from "./pages/Erro";
import { Detalhes } from "./pages/Detalhes";


export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/filmes' element={<Filmes/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='*' element={<Erro/>}/>
            <Route path='/detalhes/:category/:id' element={<Detalhes/>}/>
        </Routes>
    )
}