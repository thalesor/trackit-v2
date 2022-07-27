import type { NextPage } from 'next';
import api from '../../../services/api/api';
import React, { useEffect, useState } from "react";
import Header from 'components/Header';
import Splash from 'components/Splash';
import { useRouter } from 'next/router';
import useApp from '../../../hooks/useApp';
import useAuth from '../../../hooks/useAuth';
import useMessage from '../../../hooks/useMessage';
import Today from 'pages/Today';

const Dashboard: NextPage = () => {

  const router = useRouter();
  const { setMessage } = useMessage();
  const { signIn, authData } = useAuth();
  const { appLoaded, setAppLoaded } = useApp();

  useEffect(() =>
  {
      setAppLoaded(true);
  }, []);
  

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
        <Today/>
      </>
    </div>
  )
}

export default Dashboard;
