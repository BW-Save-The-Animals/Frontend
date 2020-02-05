import React from 'react'
import { FormControl, Stack, Input, Select, Button } from '@chakra-ui/core'
import Yup from 'yup'
import styled from '@emotion/styled'

const StyledSignUpForm = styled.div`
  margin: 0 auto;
  width: 35vw;
`

const FormHeading = styled.h1`
  font-family: 'Stardos Stencil';
  font-size: 1.4rem;
  font-weight: bold;
`

export default function Signup() {
  let initialValues = {
    name: '',
    email: '',
    password: '',
    user_type: '',
  }
  return (
    <StyledSignUpForm>
      <FormHeading>Sign Up for your free account</FormHeading>
      <FormControl>
        <Stack spacing={3}>
          <Input
            type='text'
            name='signupName'
            id='signupName'
            placeholder='Name'
          />
          <Input
            type='email'
            name='signupEmail'
            id='signupEmail'
            placeholder='Email'
          />
          <Input
            type='password'
            name='signupPassword'
            id='signupPassword'
            placeholder='Password'
          />
          <Input
            type='password'
            name='signupConfirmPassword'
            id='signupConfirmPassword'
            placeholder='Confirm Password'
          />
          <Select placeholder='Account Type'>
            <option value='supporter'>Supporter</option>
            <option value='organization'>Organization</option>
          </Select>
        </Stack>
        <Button
          mt={4}
          variantColor='green'
          type='submit'>
          Submit
        </Button>
      </FormControl>
    </StyledSignUpForm>
  )
}
