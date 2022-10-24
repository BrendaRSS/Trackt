import styled from "styled-components";
import { BsTrash } from "react-icons/bs"
import axios from "axios";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";

export default function AllHabits({ listaDeHabitos }) {
    const {
        token,
        setTodosHabitos
    } = useContext(DadosContext)

    function deleteHabit(id) {
        let respostaDelete = window.confirm("Você realmente deseja deletar esse hábito?")

        if (respostaDelete === true) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then(() => {
                    console.log("item excluido")
                    const config = {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }

                    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
                        .then((resposta) => {
                            setTodosHabitos(resposta.data)
                        })
                        .catch((erro) => {
                            console.log(erro.response.data)
                        })
                })
                .catch((erro) => {
                    console.log(erro.response.data)
                })
        } else {

        }


    }

    return (
        <ContainerAllHabits>
            {listaDeHabitos.map((h) =>
                <IndividualHabit key={h.id}>
                    <TitleHabit
                        data-identifier="habit-name">
                        {h.name}
                        <BsTrash 
                        data-identifier="delete-habit-btn"
                        onClick={() => deleteHabit(h.id)} />
                    </TitleHabit>
                    <DaysIndividualHabit>
                        {h.days.sort().map((d, index) => <ButtonsDaysHabit key={index}>{d}</ButtonsDaysHabit>)}
                    </DaysIndividualHabit>
                </IndividualHabit>
            )
            }
        </ContainerAllHabits>
    )
}


const ContainerAllHabits = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
`
const IndividualHabit = styled.div`
    box-sizing: border-box;
    padding: 20px 10px;
    width: 90%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    svg{
        font-size: 15px;
        margin-left: 20px;
        position: absolute;
        left: 85%;
        cursor: pointer;
    }
`
const TitleHabit = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const DaysIndividualHabit = styled.div`
    width: 90%;
    height: auto;
    margin-top: 8px;
    display: flex;
    justify-content: flex-start;
`
const ButtonsDaysHabit = styled.button`
    width: 30px;
    height: 30px;
    left: 31px;
    top: 193px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    margin-right:5px;
`