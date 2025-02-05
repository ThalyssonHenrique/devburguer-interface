import React from 'react'
import { useForm } from 'react-hook-form'

import logo from '../../assets/logo.svg'
import {
  Container,
  Background,
  Logo,
  ContainerItens,
  Welcome,
  AccessWith,
  BoxInputs,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Background>
        <Logo src={logo} alt="logo dev burguer" />
      </Background>

      <ContainerItens>
        <Welcome>
          Hello, welcome to <span>Dev Burguer!</span>
        </Welcome>
        <AccessWith>
          Access with your <span>Username and Password</span>
        </AccessWith>

        <BoxInputs>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label> Email</Label>
            <Input type="email" {...register('email')} />

            <Label>Password</Label>
            <Input type="password" {...register('senha')} />

            <Button type="submit">Sign In</Button>
          </form>

          <SignInLink>
            Don't have an account? <a>Sign Up</a>
          </SignInLink>
        </BoxInputs>
      </ContainerItens>
    </Container>
  )
}

export default Login
