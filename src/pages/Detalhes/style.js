import { styled } from "styled-components";

export const BannerDetalhes = styled.div`
       height : 400px;
       background-image: url(${(props => props.url)});
       background-size: cover;
       background-attachment: fixed;
       background-position: center; // corta a imagem sempre pelas laterais preservando o meio
`

export const Content = styled.div`
     max-width: 850px;
     border-radius: 10px;
     background-color: rgba(0,0,0,0.50);
     backdrop-filter: blur(11,5px);
     color: white;
     margin: 0 auto; //div vai para  o centro
     position: relative;
     top: -250px;
     padding: 30px;
     display: flex;
     align-items: center;
     column-gap: 30px;
     
     h2{
       margin-top: 20px;
     }

     ul{
        list-style-position: inside;
        margin-top: 10px;
     }

     p{
       margin-top: 10px;
     }

     button{
       background-color: #000E2A;
       margin-top: 30px;
       color: white;
       padding: 10px 40px;
       border-radius: 40px;
       cursor: pointer;
       &:hover{
          background-color : blue ;
       }
     }


     @media (max-width:850px){
         // img{display:none}    
          flex-direction: column;
          img{
            margin-bottom: 20px;
          }
     }
       
`
