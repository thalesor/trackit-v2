import type { NextPage } from 'next';
import React, { useEffect } from "react";
import Header from 'components/Header';
import Splash from 'components/Splash';
import useApp from '../../../hooks/useApp';
import Today from 'pages/today';
import Footer from 'components/Footer';

const Dashboard: NextPage = () => {

  
  const { appLoaded, setAppLoaded } = useApp();

  useEffect(() =>
  {
      setAppLoaded(true);
  }, []);
  

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    overflowY: 'hidden'
  }

  return  !appLoaded ? <Splash/>
 : (
    <div style={styles}>
      <>
        <Header/>
        <Today/>
        <Footer/>
      </>
    </div>
  )
}

export default Dashboard;
