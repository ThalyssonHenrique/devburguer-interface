import styled from 'styled-components'

import backgroundWelcome from '../../assets/backgroundburger.png'
import backgroundBurger from '../../assets/backgroundburger.png'

export const Container = styled.div`
  display: flex;
`

export const Background = styled.div`
  background-image: url(${backgroundWelcome});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 46vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 25px;
`

export const LanchesLogin = styled.img`
  width: 500px;
`

export const ThreeBurgers = styled.img`
  width: 400px;
`

export const Logo = styled.img`
  width: 400px;
`

export const ContainerItens = styled.div`
  background-image: url(${backgroundBurger});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54vw;
  height: 100vh;
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
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  margin-bottom: 3px;
`

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #cc1717;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Button = styled.button`
  width: 340px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #a4cb23;
  color: #fff;
  font-weight: bold;
  margin-top: 50px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const SignInLink = styled.p`
  color: #fff;
  margin-top: 30px;

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
