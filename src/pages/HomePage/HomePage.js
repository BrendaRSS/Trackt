import styled from "styled-components"
import HeaderHome from "../../components/HeaderHome"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DadosContext } from "../../context/DadosContext"

export default function HomePage() {
    const {
        id, setId, 
        name, setName,
        img, setImg,
        email, setEmail,
        password, setPassword,
        token, setToken
    } = useContext(DadosContext)
    const navigate = useNavigate()

    function enviarDadosLogin(event) {
        event.preventDefault()

        const body = { email, password }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
            .then((resposta) => {
                console.log(resposta.data)
                setId(resposta.data.id)
                setToken(resposta.data.token)
                setImg(resposta.data.image)
                navigate("/habitos")
            })
            .catch((erro) => {
                alert(erro.response.data.message)
            })
    }

    return (
        <>
            <HeaderHome />
            <form onSubmit={enviarDadosLogin}>
                <ContainerInputsHome>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="email"
                        required></input>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="senha"
                        required></input>
                </ContainerInputsHome>
                <ContainerButtonEntrar>
                    <button type="submit">Entrar</button>
                    <Link to={"/cadastro"}><span>Não tem uma conta? Cadastre-se</span></Link>
                </ContainerButtonEntrar>
            </form>
        </>
    )
}

const ContainerInputsHome = styled.div`
    width: 100vw;
    height: auto;
    margin-top: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        input{
            width: 303px;
            height: 45px;
            margin-bottom: 6px;
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 5px 10px;
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
const ContainerButtonEntrar = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        button{
            width: 303px;
            height: 45px;
            margin-bottom: 25px;
            border: 1px solid transparent;
            border-radius: 5px;
            background-color: #52B6FF;
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;
            color: #FFFFFF;
        }
        span{
            font-family: 'Lexend Deca', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 13.976px;
            line-height: 17px;
            text-align: center;
            text-decoration-line: underline;
            color: #52B6FF;
        }
        a{
            text-decoration: none;
        }
`