import styled from "styled-components"
import FooterMenu from "../../components/FooterMenu"
import HeaderHabits from "../../components/HeaderHabits"
import CreateHabit from "../../components/CreateHabit"
import AllHabits from "../../components/AllHabits"
import { MdAddBox } from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import { DadosContext } from "../../context/DadosContext"
import axios from "axios"

export default function MyHabits() {
    const {
        token, setNone, todosHabitos, setTodosHabitos
    } = useContext(DadosContext)
    const [error, setError] = useState(false)

    useEffect(() => {
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
    }, [])

    if (!error && todosHabitos === undefined) {
        return <div>Carregando...</div>
    }

    function CriarUmNovoHabito() {
        setNone("")
    }

    return (
        <>
            <HeaderHabits />
            <ContainerMyHabits>
                <AddHabit>Meus Hábitos
                    <MdAddBox
                        data-identifier="create-habit-btn"
                        onClick={CriarUmNovoHabito} />
                </AddHabit>
                <AddedHabits>
                    <CreateHabit />
                    {todosHabitos.length === 0 ?
                        <span data-identifier="no-habit-message">
                            Você não tem nenhum hábito <br />
                            cadastrado ainda. Adicione um hábito <br />
                            para começar a trackear!
                        </span> : <AllHabits listaDeHabitos={todosHabitos} />}
                </AddedHabits>
            </ContainerMyHabits>
            <FooterMenu />
        </>
    )
}

const ContainerMyHabits = styled.div`
    width:100vw;
    min-height: 700px;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
    z-index: 2;
`
const AddHabit = styled.div`
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
        svg{
            color: #52B6FF;
            font-size:50px;
        }
`
const AddedHabits = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        display: block;
        margin-top:10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`