import styled from "styled-components"
import FooterMenu from "../../components/FooterMenu"
import HeaderHabits from "../../components/HeaderHabits"
import { MdAddBox } from "react-icons/md"
import { useContext } from "react"
import { DadosContext } from "../../context/DadosContext"

export default function MyHabits(){
    const { 
        id, setId,
        name, setName,
        img, setImg,
        email, setEmail,
        password, setPassword,
        token, setToken 
    } = useContext(DadosContext)

    return(
        <>  
            <HeaderHabits />
            <ContainerMyHabits>
                <AddHabit>Meus Hábitos <MdAddBox /></AddHabit>
                <AddedHabits>
                   <span> 
                        Você não tem nenhum hábito <br/> 
                        cadastrado ainda. Adicione um hábito <br/>
                        para começar a trackear!
                    </span>
                </AddedHabits>
            </ContainerMyHabits>
            <FooterMenu />
        </>
    )
}

const ContainerMyHabits=styled.div`
    width:100vw;
    height: 100vh;
    background-color: #E5E5E5;
    margin-top: 70px;
    margin-bottom: 70px;
`
const AddHabit=styled.div`
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
const AddedHabits=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`