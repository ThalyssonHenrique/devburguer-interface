import React from 'react'

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
          <Label> Email</Label>
          <Input />

          <Label>Password</Label>
          <Input />

          <Button>Sign In</Button>

          <SignInLink>
            Don't have an account? <a>Sign Up</a>
          </SignInLink>
        </BoxInputs>
      </ContainerItens>
    </Container>
  )
}

export default Login
