import styled from "styled-components";
import FooterMenu from "../../components/FooterMenu";
import HeaderHabits from "../../components/HeaderHabits";
import {ImCheckboxChecked} from "react-icons/im"
import { useContext, useEffect } from "react";
import { DadosContext } from "../../context/DadosContext";
import dayjs from 'dayjs';
import axios from "axios";
import AllHabitsToday from "../../components/AllHabitsToday";

export default function TodayHabits(){
    const {token, todosHabitosDoDia, setTodosHabitosDoDia} = useContext(DadosContext)

    let date = [dayjs().locale("pt").format("dddd, D/MM/YYYY")];

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then((resposta)=>{
            setTodosHabitosDoDia(resposta.data)
        })
        .catch((erro)=>{
            console.log(erro.response.data)
        })
    }, [])

    return(
        <>
            <HeaderHabits />
            <ContainerTodayHabits>
                <Day data-identifier="today-infos">
                    { date }
                    <span>Nenhum hábito concluído ainda</span>
                </Day>
                {todosHabitosDoDia!==""? <ContainerCompletedHabits><AllHabitsToday todosHabitosDoDia={todosHabitosDoDia}/></ContainerCompletedHabits>:"CARREGANDO"}
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
    font-family: 'Lexend Deca', sans-serif;
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