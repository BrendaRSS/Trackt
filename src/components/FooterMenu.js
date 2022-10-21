import { Link } from "react-router-dom"
import styled from "styled-components"
import circuloAzul from "../assets/images/circulo.png"

export default function FooterMenu(){
    return(
        <FooterHabits>
            <Link to={"/habitos"}><span>Hábitos</span></Link>
            <Link to={"/hoje"}><div><img alt="botão habitos do dia" src={circuloAzul}/></div></Link>
            <Link to={"/historico"}><span>Histórico</span></Link>
        </FooterHabits>
    )
}

const FooterHabits=styled.footer`
    width: 100vw;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom:0px;
    left: 0px;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
    span{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    img{
        width: 91px;
        margin-bottom:40px ;
    }
    a{
        text-decoration: none;
    }

`