import { Card } from "@nextui-org/react";
import useHabits from "../../hooks/useHabits";
import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

  export default function TodayProgress(){
    dayjs.locale('pt-br');
    const today = dayjs().format('dddd, DD/MM'); 
    const { progressAmount }= useHabits();

    return (
       <StyledCard isHoverable>
        <h1>Progresso de hoje, {today}</h1>
        <h2>{progressAmount > 1 ? <h2>{progressAmount}% dos hábitos foram concluídos</h2>
        : <h3>Nenhum hábito foi concluído ainda</h3>}</h2>
        </StyledCard>
    )
  }

  const StyledCard = styled(Card)`
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
    flex-shrink: 0;
   
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
  
  
  