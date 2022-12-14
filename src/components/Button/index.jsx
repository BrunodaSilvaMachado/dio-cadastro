import React from 'react'

import { ButtonContainer } from './styles';

const Button = ({title, variant = "primary", onClick, type}) => {
  return (
    <ButtonContainer type={type} variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

export { Button }
