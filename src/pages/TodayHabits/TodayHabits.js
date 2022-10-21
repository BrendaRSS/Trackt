import styled from "styled-components";
import FooterMenu from "../../components/FooterMenu";
import HeaderHabits from "../../components/HeaderHabits";
import {ImCheckboxChecked} from "react-icons/im"

export default function TodayHabits(){
    return(
        <>
            <HeaderHabits />
            <ContainerTodayHabits>
                <Day>
                    Segunda, 17/05
                    <span>Nenhum hábito concluído ainda</span>
                </Day>
                <ContainerCompletedHabits>
                    <TheHabit>
                        HABITO DO DIA <ImCheckboxChecked />
                    </TheHabit>
                </ContainerCompletedHabits>
            </ContainerTodayHabits>
            <FooterMenu />
        </> 
    )
}

const ContainerTodayHabits=styled.div`
    width:100vw;
    height: 100vh;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
`
const Day=styled.div`
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
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #BABABA;
        }
`
const ContainerCompletedHabits=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
const TheHabit=styled.div`
width: 90%;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
`