import { Card, Container, Loading } from "@nextui-org/react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { habitInstructionType, todayHabitsType } from "../../services/api/api";
import useHabits from "../../hooks/useHabits";
import { useState } from "react";

interface ITodayCardProps {
  habit: todayHabitsType;
}

interface ITodayComponents {
  done: boolean
}

export default function TodayCard({habit}: ITodayCardProps) {
  const [isCardLoading, setIsCardLoading] = useState(false);
  const { toggleHabitsData } = useHabits();
  const { currentSequence, highestSequence } = habit;
  
  async function handleCheck(id: number, instruction: habitInstructionType)
  {
    setIsCardLoading(true);
    await toggleHabitsData(id, instruction);
    setIsCardLoading(false);
  }

  return  (
  <Card onClick={() => handleCheck(habit.id, habit.done ? 'uncheck' : 'check')} css={{ padding: '15px', width: '100%', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0}} color="primary" variant="bordered" isPressable>
        <Container css={{display: 'flex', flexDirection: 'column'}}>
        <HabitTitle>{habit.name}</HabitTitle>
          <Legend done={currentSequence > 1}> Sequência atual:<span>  {currentSequence}</span></Legend>
          <Legend done={currentSequence >= highestSequence && highestSequence > 0}> Seu recorde:<span>  {highestSequence}</span></Legend>
        </Container>
        <div>
          {isCardLoading ? <Loading size="lg" /> : <CheckIcon done={habit.done}/>}
        </div>
  </Card>
  )
}

const HabitTitle = styled.h1`
  font-size: 20px;
  color: #666666;
  font-weight: 400px;
`
const Legend = styled.h2<ITodayComponents>`
  font-size: 1rem;
  font-weight: 400px;
  color: #666666;
  font-family: 'Lexend Deca', sans-serif;
  span {
    font-size: 1.1rem;
    color: ${props => props.done ? '#8FC549' : "#666666"};
  }
`;

const CheckIcon = styled(BsCheckCircleFill)<ITodayComponents>`
  color: ${props => props.done ? '#8FC549' : "#E7E7E7"};
  border-radius: 60%;
  font-size: 60px;
  ${props => props.done && '-webkit-box-shadow: 1px 4px 26px 1px #8FC549; box-shadow: 1px 4px 26px 1px #8FC549;'} 
`
