import type { NextPage } from 'next';
import HabitsForm from 'components/HabitsForm';
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from "react";
import Splash from 'components/Splash';
import useApp from '../../../hooks/useApp';
import HabitCard from 'components/HabitCard';
import useHabits from '../../../hooks/useHabits';

const Habits: NextPage = () => {

  const { fetchHabitsData, habitsList }= useHabits();
  const { appLoaded, setAppLoaded } = useApp();
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() =>
  {
    fetchHabitsData();
  }, []);

  const toggleForm = () =>
  {
    if(formVisible)
    {
      setFormVisible(false);
      return;
    }
    setFormVisible(true);
  }
  
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'scroll',
    padding: 20,
    gap: 10
  }

  return  !appLoaded ? <Splash/>
 : (
    <div style={styles}>
      <>
      <Button onClick={() => toggleForm()} css={{width: 0, alignSelf: 'flex-end', flexShrink: 0}} shadow color="gradient">
        {formVisible ? 'Cancelar x' : 'Adicionar +'}
        </Button>
        {formVisible && <HabitsForm setFormVisible={setFormVisible}/>}
        {habitsList?.map((habit): any => <HabitCard habit={habit}/>)}
      </>
    </div>
  )
}

export default Habits;
