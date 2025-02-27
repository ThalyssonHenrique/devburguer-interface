import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '../../components/button'
import logo from '../../assets/logo.svg'
import api from '../../services/api'

import {
  Container,
  Background,
  Logo,
  ContainerItens,
  RegisterHere,
  BoxInputs,
  Label,
  Input,
  ErrorMessage,
  SignInLink
} from './styles'

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(6, 'The password must contain at least 6 characters'),
    confirmPassword: yup
      .string()
      .required('Password is required')
      .oneOf([yup.ref('password')], 'passwords must be the same')
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('/users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <Background>
        <Logo src={logo} alt="logo dev burguer" />
      </Background>

      <ContainerItens>
        <RegisterHere>Register</RegisterHere>
        <BoxInputs>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label $error={errors.name?.message}> Name</Label>
            <Input
              type="text"
              {...register('name')}
              $error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label $error={errors.email?.message}> Email</Label>
            <Input
              type="email"
              {...register('email')}
              $error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label $error={errors.password?.message}>Password</Label>
            <Input
              type="password"
              {...register('password')}
              $error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label $error={errors.confirmPassword?.message}>
              Confirm Password
            </Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              $error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

            <Button type="submit" style={{ marginTop: 50, marginBottom: 30 }}>
              Sign Up
            </Button>
          </form>
          <SignInLink>
            Don't have an account? <a>Sign In</a>
          </SignInLink>
        </BoxInputs>
      </ContainerItens>
    </Container>
  )
}

export default Register
