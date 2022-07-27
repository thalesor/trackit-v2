import type { NextPage } from 'next';
import api from '../../../services/api/api';
import React, { useEffect, useState } from "react";
import Splash from 'components/Splash';
import { useRouter } from 'next/router';
import useApp from '../../../hooks/useApp';
import useAuth from '../../../hooks/useAuth';
import useMessage from '../../../hooks/useMessage';
import HabitCard from 'components/HabitCard';

const Habits: NextPage = () => {

  const router = useRouter();
  const { setMessage } = useMessage();
  const { signIn, authData } = useAuth();
  const { appLoaded, setAppLoaded } = useApp();
  const [habitsList, setHabitsList] = useState<any[] | null>(null);

  async function fetchHabits()
  {
    const habitsData = await api.getHabits(authData?.token as string);
    await setHabitsList(habitsData.data);
    console.log(habitsData.data);
    setAppLoaded(true);
  }

  useEffect(() =>
  {
    fetchHabits();
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
