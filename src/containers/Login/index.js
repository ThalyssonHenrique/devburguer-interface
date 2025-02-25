import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '../../components/button'
import logo from '../../assets/logo.svg'
import threeBurgers from '../../assets/three-burgers.png'
import lanchesLogin from '../../assets/pizza-burger-login.png'
import api from '../../services/api'

import {
  Container,
  Background,
  ThreeBurgers,
  LanchesLogin,
  Logo,
  ContainerItens,
  BoxInputs,
  Label,
  Input,
  ErrorMessage,
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

  const onSubmit = async clientData => {
    const response = await api.post('/session', {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <Background>
        <ThreeBurgers src={threeBurgers} alt="logo welcome" />
        <LanchesLogin src={lanchesLogin} alt="logo dev burguer" />
      </Background>

      <ContainerItens>
        <Logo src={logo} alt="logo dev burguer" />
        <BoxInputs>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label> Email</Label>
            <Input
              type="email"
              {...register('email')}
              $error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label>Password</Label>
            <Input
              type="password"
              {...register('password')}
              $error={errors.password?.message}
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
