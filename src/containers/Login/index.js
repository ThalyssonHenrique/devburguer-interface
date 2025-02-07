import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import logo from '../../assets/logo.svg'
import welcome from '../../assets/welcome1.png'

import {
  Container,
  Background,
  Welcome,
  Logo,
  ContainerItens,
  BoxInputs,
  Label,
  Input,
  ErrorMessage,
  Button,
  SignInLink
} from './styles'

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'The password must contain at least 6 characters')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <Background>
        <Welcome src={welcome} alt="logo dev burguer" />
      </Background>

      <ContainerItens>
        <Logo src={logo} alt="logo dev burguer" />
        <BoxInputs>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label> Email</Label>
            <Input
              type="email"
              {...register('email')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Password</Label>
            <Input
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

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
