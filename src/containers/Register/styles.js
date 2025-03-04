import styled from 'styled-components'

import backgroundRegister from '../../assets/background-burger-register.jpg'
import backgroundBurger from '../../assets/burger-register-background.jpg'

export const Container = styled.div`
  display: flex;
`

export const Background = styled.div`
  background-image: url(${backgroundRegister});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 650px;
`

export const ContainerItens = styled.div`
  background-image: url(${backgroundBurger});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
`

export const RegisterHere = styled.h1`
  color: #a4cb23;
  font-size: 110px;
`

export const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.p`
  color: #fff;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  margin-top: 15px;
`

export const Input = styled.input`
  width: 340px;
  height: 35px;
  border-radius: 5px;
  border: ${props => (props.$error ? '2px solid #cc1717' : 'none')};
  margin-bottom: 3px;
`

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #cc1717;
  font-weight: bold;
  margin-bottom: 5px;
`

export const SignLink = styled.p`
  color: #fff;
  margin-top: 10px;

  a {
    color: #a4cb23;
    text-decoration: underline;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
`
