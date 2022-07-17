import type { NextPage } from 'next'
import { Container, Card, Spacer, Input, Button, Link, Loading} from "@nextui-org/react";
import { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp: NextPage = () => {

  const [apiLoading, setApiLoading] = useState<Boolean>(false);
  const router = useRouter();
  const styles = {
    display: 'flex',
    alignItems:'center', 
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    background: 'url(https://source.unsplash.com/1400x900/?galaxy',
    filter: apiLoading && 'blur(5px)'
  }

  return (
    <div style={styles}>
    <Card isHoverable css={{ maxWidth: 325, padding:'20px 0' }}>
      {apiLoading 
      ?
      <Container display='flex' justify='center' css={{height: '320px'}}>
        <Loading type="points" loadingCss={{ $$loadingSize: "30px", $$loadingBorder: "10px" }} />
      </Container>
      :
      <>
      <Card.Body css={{padding: 30}}>
      <Input 
          css={{width: '100%'}}
          underlined
          labelPlaceholder="Email" 
          initialValue=''
          color="primary" 
      />
      <Spacer y={1.1} />
      <Input.Password
          underlined 
          css={{width: '100%'}}
          labelPlaceholder="Senha"
          initialValue=''
          color="primary" />
      <Spacer y={1.1} />
      <Input 
          css={{width: '100%'}}
          underlined
          labelPlaceholder="Nome" 
          initialValue=''
          color="primary" 
      />
      <Spacer y={1.1} />
      <Input 
          css={{width: '100%'}}
          underlined
          labelPlaceholder="Foto" 
          initialValue=''
          color="primary" 
      />
      </Card.Body>
      <Card.Divider />
      <Card.Footer css={{display: 'flex', flexDirection: 'column', padding: '25px'}}>
      <Button shadow css={{width: '100%'}} auto ghost onClick={()=> setApiLoading(true)}>
        Cadastrar
      </Button>
      <Spacer y={1} />
      <Link block color="primary" css={{width: '100%', display: 'flex', justifyContent:'center'}} onClick={() => router.replace('/')}>
        Já tem uma conta? Faça login!
      </Link>
      </Card.Footer>
      </>
    }
    </Card>
    </div>
  )
}

export default SignUp
