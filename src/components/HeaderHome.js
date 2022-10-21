import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/images/logo8.png"

export default function HeaderHome(){
    return(
       <Link to={"/"}>
            <DivLogo><img alt="logo da Home" src={logo} /></DivLogo> 
       </Link>
    )
}

const DivLogo=styled.header`
    z-index: 2;
    position: fixed;
    top: 60px;
    left: 10%;
    width: 80%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
        img{
            width: 200px;
            height: 200px;
        }
`