import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'

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
  SignLink
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
    try {
      const { status } = await api.post(
        '/users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        {
          validateStatus: () => true
        }
      )
      if (status === 201 || status === 200) {
        toast.success('Account created successfully! 🥳', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored'
        })
      } else if (status === 409) {
        toast.error('User already exists 🧐 ', {
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
          <SignLink>
            Already have an account? <a>Sign In</a>
          </SignLink>
        </BoxInputs>
      </ContainerItens>
    </Container>
  )
}

export default Register
