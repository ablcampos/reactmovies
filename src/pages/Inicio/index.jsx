import { Link } from "react-router-dom";
import { Banner } from "../../components/Banner";
import cardHomeMovies from '../../images/card-home-movies.png';
import cardHomeSeries from '../../images/card-home-series.png';
import { CardsHome } from "./styles";

export function Inicio(){
    return(
        <>
           <Banner title="Filmes & Séries">
            <p>Lista de filmes e séries baseada na API <b>The Movie DB.</b>
               Confira as produções mais populares do mundo.
            </p>
           </Banner>
           <CardsHome>
                <Link to='/filmes'>
                   <img src={cardHomeMovies} alt=""/>
                </Link>   
                <Link to ='/series'>
                   <img src={cardHomeSeries} alt=""/>
                </Link>
           </CardsHome>
        </>
    )
}