import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CardContent, CardList, CardsItem, ListNav } from "./styles";
import star from '../../images/star.svg';
import nopicture from '../../images/no-image3.jpg';

import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";



export function List({category}){
   
  
{/*    var comboFilmes = document.getElementById("escolha");*/}


    const [items, setItems] = useState([]);
    const [tipo, setTipo] = useState('popular');
    const [contador, setContador] = useState(1);   
    const [loader, setLoader]= useState(true); 
    const [titulo, setTitulo]= useState(''); 
    
     const incrementarContador = (valor) => {           
        {valor==='+' ? setContador(contador + 1) : setContador(contador - 1)} 
       }

     const search = (otitulo)=> {
        setTitulo(otitulo);       
     }
     
     
    useEffect(()=>{     
      
         if (contador==0) {
              incrementarContador('+');
         }
     

         if (titulo === '') {
                 axios .get(`https://api.themoviedb.org/3/${category}/${tipo}`, {
                 params   : {                 
                 page     : contador,
                 language : 'pt-BR',
                 api_key  : 'b52c3256d22db46d034d4d0691247841'          
                 } })    
                 .then(response => {
                    setItems(response.data.results);
                    setLoader(false);
                 })
      
                 .catch(error => {
                     console.log(error.message);
                 }); }

                 else{   
                 
                        axios .get(`https://api.themoviedb.org/3/search/${category}`, {
                            params   : {                 
                            page     : contador,
                            language : 'pt-BR',
                            api_key  : 'b52c3256d22db46d034d4d0691247841',
                            query    : titulo
                        } })
                        .then(response => {
                            setItems(response.data.results);
                            setLoader(false);
                            console.log(response.data.results);     
                        })
            
                        .catch(error => {
                            console.log(error.message);
                        });
                     }
             }, [tipo,contador,titulo])
  
    if (loader) {
        return(
            <BarLoader  color="#36d7b7" width="100%"/>
        )
    }

    return(
      
        <div className="container">

                                                   {/* ctrl + ;    //(e) é o estado do select ,quando da o on change e.target.value é o valor */}
             
                    <select value={tipo}  onChange={(e)=> setTipo(e.target.value)} >                            
                        <option value="popular">Populares</option>
                        <option value="top_rated">Bem Avaliados</option>
                        {category === 'movie' ? <option value="now_playing">em Cartaz</option>
                        : <option value="airing_today">em Cartaz</option>}                
                    </select>   
                
                    <button  onClick={() => incrementarContador('+')}>Próximo</button>
                    <button  onClick={() => incrementarContador('-')}>Anterior</button> 
                    <input id="oi" type="text" placeholder="Digite o Título do Filme" required minlength="3" maxlength="40"></input>
                    <button  onClick={() => search(document.getElementById("oi").value)}>Procurar</button> 
          

            <CardList>       
                {                                 
                    items.map((item) => (
                       <CardsItem key={item.id}>
                          <Link to ={`/detalhes/${category}/${item.id}`}>    
                                                                                                                    
                             {(item.backdrop_path==null) ? <img src={nopicture} width={360} />
                              : <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} width={360} />}
                                    
                             <CardContent>
                                 <h2>{category === 'movie' ? item.title : item.name}</h2> 
                                 <h3>Ano : {category === 'movie' ? item.release_date.substring(0,4) : item.first_air_date.substring(0,4)}</h3>
                                 <span> <img src={star}/> {item.vote_average}</span>
                             </CardContent>
                          </Link>   
                       </CardsItem>
                    ))
                }
           </CardList>
       </div>  
     
    )
} 