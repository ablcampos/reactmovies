import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { BannerDetalhes, Content } from "./style";
import { BarLoader } from "react-spinners";

export function Detalhes(){
    //extraindo da url as informacoes passadas no momento do clik
    const {id} = useParams(); 
    const {category} = useParams(); 
    
    function voltar(){
        navigate(-1);
    }

    const[item,setItem] = useState([]);
    const[loader, setLoader]= useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${category}/${id}`, {
                  params   : {        
                      language : 'pt-BR',
                      api_key  : 'b52c3256d22db46d034d4d0691247841'
                 }
             })
     
             .then(response => {
                   setItem(response.data);//guardadndo no estado a resposta da API nao tem response porque nao é array
                   setLoader(false);
             })
     
             .catch(error => {
                 console.log(error.message);
             });   
         
    },  [])

    if (loader) {
        return(
            <BarLoader  color="#36d7b7" width="100%"/>
        )
    }

    return(
        <>
             <BannerDetalhes url={`https://image.tmdb.org/t/p/original${item.backdrop_path}` } />   
            
             <Content>
                 
                 <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} /> 

                 <div>
                        <h1>{category === 'movie' ? item.title : item.name}</h1> 
                        <h2>{item.tagline}</h2>

                        <ul>                   
                            {<li>Ano : {category === 'movie' ? item.release_date.substring(0,4) : item.first_air_date.substring(0,4)}</li>} 
                            <li>Avaliação: {item.vote_average}</li>
                        </ul>
                        <p>
                            {item.overview}
                        </p>
                        <button onClick={voltar}>Voltar</button>
                 </div>
             </Content>
        </>
        
        
    )

}