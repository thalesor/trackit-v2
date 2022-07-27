import 'styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useState } from 'react';
import Router from 'next/router';
import { MessageProvider } from '../../contexts/MessageContext';
import { AuthProvider } from '../../contexts/AuthContext';
import { AppProvider } from '../../contexts/AppContext';
import { HabitsProvider } from '../../contexts/HabitsContext';

const imageLoader=({src})=>{
  return `https://source.unsplash.com/1400x900/?galaxy`;
}

function App({ Component, pageProps }: AppProps) {

  const [appLoaded, setAppLoaded] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setAppLoaded(false);
  });

  return (
  <NextUIProvider>
    <AppProvider>
    <MessageProvider>
    <AuthProvider>
    <HabitsProvider>
    <Image
    loader={imageLoader}
        src="https://source.unsplash.com/1400x900/?galaxy"
        blurDataURL="https://source.unsplash.com/1400x900/?galaxy"
        alt="Background image"
        layout='fill'
         placeholder="blur"
         style={{zIndex: 0}}
         onLoad={() => setAppLoaded(true)}
      />
      <Component {...pageProps} />
      </HabitsProvider>
    </AuthProvider>
    </MessageProvider>
    </AppProvider>
  </NextUIProvider>
  )
}

export default App
