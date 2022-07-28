import { Card } from "@nextui-org/react";
import useHabits from "../../hooks/useHabits";
import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

  export default function TodayProgress(){
    dayjs.locale('pt-br');
    const today = dayjs().format('dddd, DD/MM'); 
    const { todayHabitsList, getTodayProgressPercent }= useHabits();

    const calculateTodayProgress = () =>
    {
        const percent = getTodayProgressPercent();
        if(percent > 0)
        return <h2>{percent}% dos hábitos foram concluídos!</h2>

        return <h3>Nenhum hábito concluído ainda!</h3>;
    }
  
    return (
       <StyledCard isHoverable>
        <h1>Progresso de hoje, {today}</h1>
        <h2>{calculateTodayProgress()}</h2>
        </StyledCard>
    )
  }

  const StyledCard = styled(Card)`
    background: #16181a;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    h1 {
       font-size: 23px;
       color: #126BA5;
    }

    h2 {
        font-size: 18px;
        color: #8FC549;
     }

     h3 {
        font-size: 18px;
        color: #BABABA;
     }
  `;
  
  
  