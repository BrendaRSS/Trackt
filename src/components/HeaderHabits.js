import styled from "styled-components"
import textoLogo from "../assets/images/logoNome.png"
import { useContext } from "react"
import { DadosContext } from "../context/DadosContext"

export default function HeaderHabits(){
    const { img } = useContext(DadosContext)
    return(
        <HeaderLogoHabits>
            <div><LogoTrackt alt="Texto Logo" src={textoLogo} /></div>
            <div><ProfileImge alt="Texto Logo" src={img} /></div>
        </HeaderLogoHabits>
    )
}

const HeaderLogoHabits=styled.header`
z-index: 2;
box-sizing: border-box;
padding: 0 10px;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
`
const ProfileImge=styled.img`
    width: 50px;
    border-radius: 50%;
`
const LogoTrackt=styled.img`
    width: 150px;
    height: 50px;
`