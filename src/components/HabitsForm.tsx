import type { NextComponentType } from 'next';
import api from '../../services/api/api';
import { Container, Card, Spacer, Input, Button, Loading, Grid } from "@nextui-org/react";
import React, { useState } from "react";
import Form from 'components/Form';
import useMessage from '../../hooks/useMessage';
import DayBlock, { weekDayRange } from './DayBlock';
import useAuth from '../../hooks/useAuth';
import useHabits from '../../hooks/useHabits';

const HabitsForm: NextComponentType = ({setFormVisible}: IHabitsFormProps) => {

  interface IHabitsFormProps {
    setFormVisible: () => void
  }

  interface IFormDataProps {
    name: string,
    days: weekDayRange[]
  }

  const [formSubmiting, setFormSubmiting] = useState(false);
  const { authData } = useAuth();
  const { fetchHabitsData } = useHabits();
  const { setMessage } = useMessage();
  
  const [formData, setFormData] = useState<IFormDataProps>({
    name: '',
    days: []
  });

  const days = [1, 2, 3, 4, 5, 6, 7];

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const addOrRemoveDaysFromHabit = (day: weekDayRange) =>
  {
    const newDaysSet = new Set(formData.days);
    if(newDaysSet.has(day))
        newDaysSet.delete(day);
    else
        newDaysSet.add(day);

    setFormData({...formData, ['days']: Array.from(newDaysSet)})
  }

  async function handleSubmit(e: React.FormEvent) 
  {
    e.preventDefault();

    if(!formData.days.length)
    {
      setMessage({
        type: 'warning',
        message: `Precisa selecionar pelo menos um dia para o hábito que está sendo criado`
      });
      return;
    }
    setFormSubmiting(true);
    try
    {
      await api.postHabit(formData, authData?.token as string);
        setFormVisible(false);
        fetchHabitsData();
        setMessage({
          type: 'success',
          message: `Hábito adicionado`
        });

    }
    catch(err)
    {
        setMessage({
          type: 'error',
          message: 'Erro ao tentar adicionar o hábito'
        });
    }
    finally
    {
      setFormSubmiting(false);
    }
  }

  return (
    <Card isHoverable css={{ padding:'5px 0', marginBottom: 30, marginTop: 10, flexShrink: 0 }}>
      {formSubmiting 
      ?
      <Container display='flex' justify='center' css={{height: 254}}>
        <Loading type="points" loadingCss={{ $$loadingSize: "30px", $$loadingBorder: "10px" }} />
      </Container>
      :
      <>
      <Form onSubmit={(e)=> handleSubmit(e)}>
      <Card.Body css={{padding: 30}}>
      <Input 
          css={{width: '100%'}}
          type="text"
          underlined
          autoComplete='false'
          labelPlaceholder="Nome do hábito" 
          value={formData.name}
          onChange={handleInputChange}
          color="primary" 
          name='name'
          required
      />
      <Spacer y={1.6} />
      <Grid.Container css={{gap: 4}}>
            {days.map((day: any) => <DayBlock onClick={() => addOrRemoveDaysFromHabit(day)} number={day} fill={formData.days.includes(day)}/>)}
      </Grid.Container>
      </Card.Body>
      <Card.Divider />
      <Card.Footer css={{display: 'flex', flexDirection: 'column', padding: '25px'}}>
      <Button type='submit' shadow css={{width: '100%'}} auto ghost>
        Criar
      </Button>
      </Card.Footer>
      </Form>
      </>
    }
    </Card>
  )
}

export default HabitsForm
