import { Card, Grid } from "@nextui-org/react";
import styled from "styled-components";
import DayBlock from "./DayBlock";
import { BsCheckCircleFill } from "react-icons/bs";

export default function HabitCard({habit}: any) {
  const days = [1, 2, 3, 4, 5, 6, 7];

  return  (
  <Card css={{ padding: '15px', width: '100%', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} color="primary" variant="bordered" isPressable>
        <Grid.Container css={{gap: 8}}>
        <HabitTitle>{habit.name}</HabitTitle>
          <Grid.Container css={{gap: 4}}>
            {days.map((day: any) => <DayBlock number={day} fill={habit.days.includes(day)}/>)}
          </Grid.Container>
        </Grid.Container>
        <div>
          icone lixeira
        </div>
  </Card>
  )
}

const HabitTitle = styled.h1`
  font-size: 20px;
  color: #666666;
  font-weight: 400px;
`

const Check = styled(BsCheckCircleFill)`
  color: #E7E7E7;
  font-size: 60px;
`
