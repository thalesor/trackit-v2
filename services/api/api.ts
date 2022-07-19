import axios from "axios";

const baseApi = axios.create({ baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'});

async function getTodayHabitsData(token: string)
{
  const responseObj = await baseApi.get(`/habits/today`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

async function getHabits(token: string)
{
  const responseObj = await baseApi.get(`/habits`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

type habitInstructionType = 'check' | 'uncheck';

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

interface IDay {
    id: number,
    name: string
}

interface IHabitData {
    name: string,
    days: IDay[]
}

async function postHabit(data: IHabitData, token: string)
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
    signIn,
    signUp,
    getHabits,
    deleteHabit,
    postHabit,
    updateHabitStatus
};

export default api;