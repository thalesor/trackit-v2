import { useContext } from "react";
import { HabitsContext } from "../contexts/HabitsContext";

export default function useHabits() {
  const habitsContext = useContext(HabitsContext);
  if (!habitsContext) {
    throw new Error("useHabits must be used inside a HabitsContext Provider");
  }

  return habitsContext;
}