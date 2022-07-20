import type { NextPage } from 'next';
import api from '../../../services/api/api';
import React, { useEffect, useState } from "react";
import Header from 'components/Header';
import Splash from 'components/Splash';
import { useRouter } from 'next/router';
import useApp from '../../../hooks/useApp';
import useAuth from '../../../hooks/useAuth';
import useMessage from '../../../hooks/useMessage';

const Dashboard: NextPage = () => {

  interface IFormDataProps {
    email: string,
    password: string
  }

  const [formSubmiting, setFormSubmiting] = useState(false);
  const router = useRouter();
  const { setMessage } = useMessage();
  const { signIn, authData } = useAuth();
  const { appLoaded, setAppLoaded } = useApp();

  useEffect(() =>
  {
      setAppLoaded(true);
  }, []);
  
  const [formData, setFormData] = useState<IFormDataProps>({
    email: '',
    password: ''
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  
  async function handleSubmit(e: React.FormEvent) 
  {
    e.preventDefault();
    setFormSubmiting(true);
    try
    {
      const { data } = await api.signIn(formData);
        
        setMessage({
          type: 'success',
          message: `Bem-vindo ${data.name}`,
          closeHandler: () => router.replace('/')
        });

        delete data.password;
        delete data.email;

        signIn(data);
    }
    catch(err)
    {
        setMessage({
          type: 'error',
          message: 'email e/ou senha inválidos!'
        });
    }
    finally
    {
      setFormSubmiting(false);
    }
  }

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%'
  }

  return  !appLoaded ? <Splash/>
 : (
    <div style={styles}>
      <>
        <Header/>
      </>
    </div>
  )
}

export default Dashboard;
