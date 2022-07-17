import type { NextPage } from 'next'
import { Container, Card, Spacer, Input, Button, Link, Loading } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Form from 'components/Form';
import { Router, useRouter } from 'next/router';
import useMessage from '../../hooks/useMessage';

const SignIn: NextPage = () => {

  interface IFormDataProps {
    email: string,
    password: string
  }

  const [formSubmiting, setFormSubmiting] = useState(false);
  const router = useRouter();
  const { setMessage } = useMessage();
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
        const promise = await api.login(formData);
        //login(promise.data);
    }
    catch(err)
    {
        setMessage({});
        setFormSubmiting(false);
    }
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
      {formSubmiting 
      ?
      <Container display='flex' justify='center' css={{height: '320px'}}>
        <Loading type="points" loadingCss={{ $$loadingSize: "30px", $$loadingBorder: "10px" }} />
      </Container>
      :
      <>
      <Form onSubmit={(e)=> handleSubmit(e)}>
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
      <Link block color="primary" css={{width: '100%', display: 'flex', justifyContent:'center'}}  onClick={() => router.push('/signup')}>
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
