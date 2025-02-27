import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 340px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #a4cb23;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
