import styled from "styled-components"
import FooterMenu from "../../components/FooterMenu"
import HeaderHabits from "../../components/HeaderHabits"

export default function Historic(){
    return(
        <>
            
            <HeaderHabits />
            <ContainerHistoricMyHabits>
                <TitleHistoricHabits>
                    Histórico
                    <span>Em breve você poderá ver o histórico <br/> dos seus hábitos aqui!</span>
                </TitleHistoricHabits>
            </ContainerHistoricMyHabits>
            <FooterMenu />
        
        </>
    )
}

const ContainerHistoricMyHabits=styled.div`
    width:100vw;
    height: 100vh;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
`
const TitleHistoricHabits=styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 30px 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
        span{
            display: block;
            margin-top: 20px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #666666;
        }
`