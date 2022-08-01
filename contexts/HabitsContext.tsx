import { createContext, useState } from "react";
import api, { createHabitsType, habitInstructionType, todayHabitsType } from "../services/api/api";
import useAuth from '../hooks/useAuth';

interface IHabitsContext {
    habitsList: null | createHabitsType[];
    todayHabitsList: null | todayHabitsType[];
    fetchHabitsData: () => void;
    fetchTodayHabitsData: () => void;
    deleteHabit: (id: number) => void;
    toggleHabitsData: (id: number, instruction: habitInstructionType) => void;
    getTodayProgressPercent: () => number;
}

export const HabitsContext = createContext<IHabitsContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function HabitsProvider({ children }: Props) {
  const { authData } = useAuth();
  const [habitsList, setHabitsList] = useState<createHabitsType[] | null>(null);
  const [todayHabitsList, setTodayHabitsList] = useState<todayHabitsType[] | null>(null);

  async function fetchHabitsData()
  {
    const habitsData = await api.getHabitsData(authData?.token as string);
    setHabitsList(habitsData);
  }
  
  async function fetchTodayHabitsData()
  {
    const habitsData = await api.getTodayHabitsData(authData?.token as string);
    setTodayHabitsList(habitsData);
  }

  async function toggleHabitsData(id: number, instruction: habitInstructionType)
  {
    await api.updateHabitStatus(authData?.token as string, +id, instruction);
    await fetchTodayHabitsData();
  }

  async function deleteHabit(id: number)
  {
    await api.deleteHabit(+id, authData?.token as string);
    await fetchHabitsData();
  }

  function getTodayProgressPercent()
  {
    const done = todayHabitsList?.filter(habit => habit.done);
    const percent = (Number(done?.length)/Number(todayHabitsList?.length))*100;
    return percent.toFixed(0);
  }

  return (
    <HabitsContext.Provider value={{todayHabitsList, habitsList, fetchTodayHabitsData, fetchHabitsData, deleteHabit, toggleHabitsData, getTodayProgressPercent}}>
      {children}
    </HabitsContext.Provider>
  );
}