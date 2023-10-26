import { BannerStyle } from "./styles";

export function Banner({title,children}){
    return(
        <BannerStyle>
           <h1>{title}</h1>
           {children}
        </BannerStyle>
    )
}