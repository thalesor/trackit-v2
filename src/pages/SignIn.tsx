import type { NextPage } from 'next'
import { Container, Card, Spacer, Input, Button, Link, Loading } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Form from 'components/Form';
import { Router, useRouter } from 'next/router';

const SignIn: NextPage = () => {

  interface IFormDataProps {
    email: string,
    password: string
  }

  const [apiLoading, setApiLoading] = useState<Boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchImage()
    {
      const response = await fetch('https://source.unsplash.com/1400x900/?clouds');
      const blob = await response.blob();
      console.log(response);
    }
    fetchImage();
  },[])

  const [formData, setFormData] = useState<IFormDataProps>({
    email: '',
    password: ''
  })

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const styles = {
    display: 'flex',
    alignItems:'center', 
    justifyContent: 'center',
    height: '100vh',
    width: '100%'
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
      <Form onSubmit={()=> setApiLoading(true)}>
      <Card.Body css={{padding: 30}}>
      <Input 
          css={{width: '100%'}}
          type="email"
          underlined
          autoComplete='false'
          labelPlaceholder="Email" 
          value={formData.email}
          onChange={handleInputChange}
          color="primary" 
          name='email'
          required
      />
      <Spacer y={1.6} />
      <Input.Password
          underlined 
          autoComplete='false'
          css={{width: '100%'}}
          labelPlaceholder="Senha"
          value={formData.password}
          onChange={handleInputChange}
          color="primary"
          name='password'
          required
          />
      </Card.Body>
      <Card.Divider />
      <Card.Footer css={{display: 'flex', flexDirection: 'column', padding: '25px'}}>
      <Button type='submit' shadow css={{width: '100%'}} auto ghost>
        Entrar
      </Button>
      <Spacer y={1} />
      <Link block color="primary" css={{width: '100%', display: 'flex', justifyContent:'center'}}  onClick={() => router.replace('/signup')}>
        Não tem uma conta? Cadastre-se!
      </Link>
      </Card.Footer>
      </Form>
      </>
    }
    </Card>
    </div>
  )
}

export default SignIn
