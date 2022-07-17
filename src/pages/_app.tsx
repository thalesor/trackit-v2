import 'styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import { useState } from 'react';
import Splash from 'components/Splash';

const imageLoader=({src})=>{
  return `https://source.unsplash.com/1400x900/?galaxy`;
}

function App({ Component, pageProps }: AppProps) {

  const [appLoaded, setAppLoaded] = useState(false);

  return (
  <NextUIProvider>
    <Image
    loader={imageLoader}
        src="https://source.unsplash.com/1400x900/?galaxy"
        blurDataURL="https://source.unsplash.com/1400x900/?galaxy"
        alt="Background image"
        layout='fill'
         placeholder="blur"
         onLoad={() => setAppLoaded(true)}
      />
    {appLoaded ? <Component {...pageProps} />
    : <Splash/>}
  </NextUIProvider>
  )
}

export default App
