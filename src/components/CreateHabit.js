import styled from "styled-components"
import { useContext } from "react"
import { DadosContext } from "../context/DadosContext"
import axios from "axios"

export default function CreateHabit() {
    const {
        none,
        nameHabit,
        setNameHabit,
        diasEscolhidos,
        setDiasEscolhidos,
        token, setNone,
        setTodosHabitos
    } = useContext(DadosContext)
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"]
    console.log(nameHabit, diasEscolhidos)

    function escolherDiasDaSamana(dia, index) {
        if (diasEscolhidos.includes(index + 1) === false) {
            let newArray = [...diasEscolhidos, index + 1]
            setDiasEscolhidos(newArray)
        } else if (diasEscolhidos.includes(index + 1) === true) {
            let newArray = diasEscolhidos.filter((d) => d !== index + 1)
            setDiasEscolhidos(newArray)
        }
    }

    function enviarDados(event) {
        event.preventDefault() //Verificar se precisa disso
        const body = {
            name: nameHabit,
            days: diasEscolhidos
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
            .then((resposta) => {
                console.log(resposta.data)
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
                setNameHabit("")
                setDiasEscolhidos([])
                setNone("none")
            })
            .catch((erro) => {
                console.log(erro.response.data)
            })
    }

    function cancelarCriacaoHabito() {
        setNone("none")
    }

    return (
        <ContainerDisplayNone none={none}>
            <ChosenHabit>
                <input
                    onChange={e => setNameHabit(e.target.value)}
                    value={nameHabit}
                    type="text"
                    placeholder="nome do hábito"
                    required />
                <ContainerDaysWeek>
                    {diasDaSemana.map((d, index) =>
                        <BotaoDiaDaSemana
                            key={index}
                            corBorda={(diasEscolhidos.includes(index + 1) === true ? "#FFFFFF" : "#CFCFCF")}
                            corLetra={(diasEscolhidos.includes(index + 1) === true ? "#FFFFFF" : "#CFCFCF")}
                            corBotao={(diasEscolhidos.includes(index + 1) === true ? "#CFCFCF" : "#FFFFFF")}
                            onClick={() => escolherDiasDaSamana(d, index)}>
                            {d}
                        </BotaoDiaDaSemana>
                    )}
                </ContainerDaysWeek>
                <ButtonCancelOrSave>
                    <p onClick={cancelarCriacaoHabito}>Cancelar</p><button onClick={enviarDados}>Salvar</button>
                </ButtonCancelOrSave>
            </ChosenHabit>
        </ContainerDisplayNone>
    )
}

const ContainerDisplayNone = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom: 20px;
    display:${(props) => props.none};
`
const ChosenHabit = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px 10px;
    width: 90%;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
        input{
            box-sizing: border-box;
            padding: 0 20px;
            width: 90%;
            height: 45px;
            left: 36px;
            top: 165px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            ::placeholder{
                font-family: 'Lexend Deca', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
            }
        }
       
`
const ContainerDaysWeek = styled.div`
 width: 90%;
 height: auto;
 margin-top: 8px;
`
const BotaoDiaDaSemana = styled.button`
    background-color: ${(props) => props.corBotao};
    border: 1px solid ${(props) => props.corBorda};
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => props.corLetra};
    margin-right:5px;
`
const ButtonCancelOrSave = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    padding: 10px 0px;
    width:90%;
    height: 45px;
    display: flex;
    justify-content: right;
    align-items: center;
        button{
            margin-left: 20px;
            width: 84px;
            height: 35px;
            left: 257px;
            top: 277px;
            background: #52B6FF;
            border: none;
            border-radius: 4.63636px;
            font-family:  'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
        }
        p{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color:  #52B6FF;
        }
`
