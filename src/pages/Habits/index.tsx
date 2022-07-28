import type { NextPage } from 'next';
import api from '../../../services/api/api';
import React, { useEffect, useState } from "react";
import Splash from 'components/Splash';
import { useRouter } from 'next/router';
import useApp from '../../../hooks/useApp';
import useAuth from '../../../hooks/useAuth';
import HabitCard from 'components/HabitCard';
import useHabits from '../../../hooks/useHabits';

const Habits: NextPage = () => {

  const router = useRouter();
  const { fetchHabitsData, habitsList }= useHabits();
  const { appLoaded, setAppLoaded } = useApp();

  useEffect(() =>
  {
    fetchHabitsData();
  }, []);
  
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 20,
    gap: 10
  }

  return  !appLoaded ? <Splash/>
 : (
    <div style={styles}>
      <>
        {habitsList?.map((habit): any => <HabitCard habit={habit}/>)}
      </>
    </div>
  )
}

export default Habits;
