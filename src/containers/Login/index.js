import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

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
  SignLink
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
    try {
      const { status } = await api.post(
        '/session',
        {
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('😎 Welcome!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('🧐 Check your email and password ', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('💀 System failure! Try again...', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  }

  return (
    <Container>
      <Background>
        <ThreeBurgers src={threeBurgers} alt="three burgers" />
        <LanchesLogin src={lanchesLogin} alt="lanches login" />
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

            <Button type="submit" style={{ marginTop: 50, marginBottom: 30 }}>
              Sign In
            </Button>
          </form>

          <SignLink>
            Don't have an account? <a>Sign Up</a>
          </SignLink>
        </BoxInputs>
      </ContainerItens>
    </Container>
  )
}

export default Login
