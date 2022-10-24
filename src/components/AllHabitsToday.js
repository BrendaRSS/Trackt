import styled from "styled-components"
import { BsCheckSquareFill } from "react-icons/bs"
import { useContext } from "react"
import { DadosContext } from "../context/DadosContext"
import axios from "axios"

export default function AllHabisToday({ todosHabitosDoDia }) {

    const { token, setTodosHabitosDoDia } = useContext(DadosContext)

    function marcarHabitoComoFeito(habito) {
        if (habito.done === false) {

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            let body = habito.id

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`, body, config)
                .then((resposta) => {
                    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                        .then((resposta) => {
                            setTodosHabitosDoDia(resposta.data)
                        })
                        .catch((erro) => {
                            console.log(erro.response.data)
                        })
                })

                .catch((erro) => {
                    console.log(erro.response.data)
                })



        } else if (habito.done === true) {

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            let body = habito.id

            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`, body, config)
                .then((resposta) => {
                    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
                        .then((resposta) => {
                            setTodosHabitosDoDia(resposta.data)
                        })
                        .catch((erro) => {
                            console.log(erro.response.data)
                        })
                })

                .catch((erro) => {
                    console.log(erro.response.data)
                })
        }
    }

    return (
        <ContainerAllHabitsToday>
            {todosHabitosDoDia.map((h) =>
                <IndividualHabitToday
                    data-identifier="today-infos"
                    key={h.id}
                    id={h.id}
                    done={h.done}>
                    <ControllHabits>
                        <TitleHabitToday>
                            {h.name}
                        </TitleHabitToday>
                        <HabitRecord>
                            Sequência atual: <SequenciaATual done={h.done}>{h.currentSequence} dias</SequenciaATual> <br />
                            Seu recorde: <Record
                                recorde={h.currentSequence === h.highestSequence ? (h.highestSequence>0? true:false ): false}>
                                {h.highestSequence} dias
                            </Record>
                        </HabitRecord>
                    </ControllHabits>
                    <BsCheckSquareFill
                        data-identifier="done-habit-btn"
                        onClick={() => marcarHabitoComoFeito(h)} />
                </IndividualHabitToday>)}
        </ContainerAllHabitsToday>
    )
}

const ContainerAllHabitsToday = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 70px;
`
const IndividualHabitToday = styled.div`
    box-sizing: border-box;
    padding: 20px 15px;
    width: 90%;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg{
        font-size: 70px;
        color: ${(props) => (props.done === true ? "#8FC549" : "#EBEBEB")};
        border: 1px #E7E7E7;
        border-radius: 5px;
        cursor: pointer;
    }
`
const ControllHabits = styled.div`
    width: 208px;
    height: auto;
`
const TitleHabitToday = styled.div`
    width: 208px;
    height: 25px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
`
const HabitRecord = styled.div`
    width: 170px;
    height: 32px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: "#666666";
`
const SequenciaATual = styled.span`
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${(({ done }) => done === true ? "#8FC549" : "#666666")};
`
const Record = styled.span`
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${(({ recorde }) => recorde === true ? "#8FC549" : "#666666")};
`