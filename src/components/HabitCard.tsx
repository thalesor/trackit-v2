import { Card, Grid } from "@nextui-org/react";
import styled from "styled-components";
import DayBlock from "./DayBlock";
import { FaTrashAlt } from "react-icons/fa";
import useMessage from "../../hooks/useMessage";
import useHabits from "../../hooks/useHabits";

export default function HabitCard({habit}: any) {
  const days = [1, 2, 3, 4, 5, 6, 7];

  const { setMessage } = useMessage();
  const { deleteHabit } = useHabits();

  return  (
  <Card css={{ padding: '15px', width: '100%', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0}} color="primary" variant="bordered" isPressable>
        <Grid.Container css={{gap: 8}}>
        <HabitTitle>{habit.name}</HabitTitle>
          <Grid.Container css={{gap: 4}}>
            {days.map((day: any) => <DayBlock number={day} fill={habit.days.includes(day)}/>)}
          </Grid.Container>
        </Grid.Container>
          <TrashIcon 
            onClick={() => {
              setMessage({
                type: 'confirm',
                message: `Tem certeza que deseja deletar ${habit.name}?`,
                confirmHandler: () => {
                  deleteHabit(habit.id);
                }
              });
            }}
          />
  </Card>
  )
}

const HabitTitle = styled.h1`
  font-size: 20px;
  color: #666666;
  font-weight: 400px;
`

const TrashIcon = styled(FaTrashAlt)`
  color: #CFCFCF;
  font-size: 30px;
`
