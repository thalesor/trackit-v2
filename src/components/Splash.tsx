import type { NextComponentType } from 'next'
import Image from 'next/image';

const Splash: NextComponentType = () => {

  return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff'}}>
        <Image src={'/logo.png'} width={200} height={200}/>
    </div>
  )
}

export default Splash;
