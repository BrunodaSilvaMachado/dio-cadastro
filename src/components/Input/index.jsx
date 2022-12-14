import React from 'react'
import { Controller } from "react-hook-form";
import {InputContainer, InputText, IconContainer,ErrorText } from './styles';

const Input = ({leftIcon, name, control, autocomplete , errorMsg, ...rest}) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          defaultValue = {''}
          render={({ field }) =>  <InputText {...field} {...rest} autocomplete={autocomplete} />}
        />
        
      </InputContainer>
      {errorMsg ? <ErrorText>{errorMsg}</ErrorText>: null}
    </>
  )
}

export { Input }; 
