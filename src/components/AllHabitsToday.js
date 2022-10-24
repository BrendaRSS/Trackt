import styled from "styled-components"
import { BsFillCheckSquareFill } from "react-icons/bs"

export default function AllHabisToday({ todosHabitosDoDia }) {
    console.log(todosHabitosDoDia)

    return (
        <ContainerAllHabitsToday>
            {todosHabitosDoDia.map((h) =>
                <IndividualHabitToday key={h.id}>
                    <ControllHabits>
                        <TitleHabitToday>
                            {h.name}
                        </TitleHabitToday>
                        <HabitRecord>
                            Sequência atual: 3 dias<br />
                            Seu recorde: 5 dias
                        </HabitRecord>
                    </ControllHabits>
                    <BsFillCheckSquareFill />
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
    width: 146px;
    height: 32px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`