import type { NextPage } from 'next';

import { todayHabitsType } from '../../../services/api/api';
import React, { useEffect } from "react";
import Splash from 'components/Splash';
import { useRouter } from 'next/router';
import useApp from '../../../hooks/useApp';
import useHabits from '../../../hooks/useHabits';
import useMessage from '../../../hooks/useMessage';
import TodayCard from 'components/TodayCard';
import TodayProgress from 'components/TodayProgress';

const Today: NextPage = () => {

  const router = useRouter();
  const { setMessage } = useMessage();
  const { fetchTodayHabitsData, todayHabitsList } = useHabits();
  const { appLoaded, setAppLoaded } = useApp();

  useEffect(() =>
  {
    fetchTodayHabitsData()
  }, []);
  
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: 20,
    paddingBottom: 100,
    overflow: 'scroll',
    gap: 10
  }

  return  !appLoaded ? <Splash/>
 : (
    <div style={styles}>
      <>
        <TodayProgress/>
        {todayHabitsList?.map((habit: todayHabitsType) => <TodayCard habit={habit}/>)}
      </>
    </div>
  )
}

export default Today;
