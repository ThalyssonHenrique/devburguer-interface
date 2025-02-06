import styled from 'styled-components'

import backgroundLogo from '../../assets/fundo-devburger.svg'

export const Container = styled.div`
  display: flex;
  background-color: #202080;
`

export const Background = styled.div`
  background-image: url(${backgroundLogo});
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 500px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 170px;
  width: 54vw;
  height: 100vh;
`

export const Welcome = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: 100%;

  span {
    color: #303030;
    font-weight: bold;
  }
`

export const AccessWith = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 80px;

  span {
    color: #303030;
    font-weight: bold;
  }
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
  font-size: 10px;
  color: #cc1717;
  font-weight: bold;
`

export const Button = styled.button`
  width: 340px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #303030;
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
    color: #303030;
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
