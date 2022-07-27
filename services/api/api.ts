import axios from "axios";

const baseApi = axios.create({ baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'});

interface IHabit {
  id: number;
  name: string;
  days: number[];
  done: boolean;
  currentSequence: number;
  highestSequence: number;
}

export type createHabitsType = Omit<IHabit, 'id' | 'done' | 'currentSequence' | 'highestSequence'>;
export type todayHabitsType = Omit<IHabit, 'days'>;

async function getTodayHabitsData(token: string)
{
  const { data } = await baseApi.get<{data: todayHabitsType[]}>(`/habits/today`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
}

async function getHabitsData(token: string)
{
  const { data } = await baseApi.get<{data: createHabitsType[]}>(`/habits`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
}

export type habitInstructionType = 'check' | 'uncheck';

async function updateHabitStatus(token: string, id: number, instruction: habitInstructionType)
{
  const responseObj = await baseApi.post(`/habits/${id}/${instruction}`, null, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

interface IUser 
{
    email: string,
    password: string
}

async function signIn(data: IUser)
{
  const responseObj = await baseApi.post(`/auth/login`, data);
    return responseObj;
}

async function signUp(data: IUser)
{
  const responseObj = await baseApi.post(`/auth/sign-up`, data);
    return responseObj;
} 

async function postHabit(data: createHabitsType, token: string)
{
  const responseObj = await baseApi.post(`/habits`, data, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

async function deleteHabit(id: number, token: string)
{
  const responseObj = await baseApi.delete(`/habits/${id}`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

const api =  {
    getTodayHabitsData,
    getHabitsData,
    signIn,
    signUp,
    deleteHabit,
    postHabit,
    updateHabitStatus
};

export default api;