import React, { useState } from 'react'
import {
  FormControl,
  Stack,
  Input,
  Select,
  Button,
  Textarea,
} from '@chakra-ui/core'
import NavBar from './NavBar'
import axios from 'axios'
import styled from '@emotion/styled'

const StyledSignUpForm = styled.div`
  margin: 0 auto;
  width: 35vw;
`

const FormHeading = styled.h1`
  font-family: 'Stardos Stencil';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
`

export default function Signup() {
  let initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    about: '',
    user_type: '',
  }

  const [formValues, setFormValues] = useState(initialValues)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues)
    axios
      .post('https://save-all-the-animals.herokuapp.com/api/auth/register', {
        name: formValues.name,
        email: formValues.email,
        password: formValues.confirmPassword,
        about: formValues.about,
        user_type: formValues.user_type,
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    setFormValues(initialValues)
  }
  const handleChange = e => {
    if (e.target.type === 'select-one') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.options[
          e.target.selectedIndex
        ].index.toString(),
      })
      console.log(e.target.options[e.target.selectedIndex].index.toString())
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    console.log(formValues)
  }
  return (
    <>
      <NavBar page='signup' />
      <StyledSignUpForm>
        <FormHeading>Sign up for your free account</FormHeading>
        <FormControl>
          <Stack spacing={3}>
            <Input
              type='text'
              name='name'
              placeholder='Name'
              value={formValues.name}
              onChange={handleChange}
            />
            <Input
              type='email'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
            />
            <Input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <Textarea
              name='about'
              placeholder='A little about yourself'
              value={formValues.about}
              onChange={handleChange}
            />
            <Select
              name='user_type'
              placeholder='Account Type'
              onChange={handleChange}>
              <option value='supporter'>Supporter</option>
              <option value='organization'>Organization</option>
            </Select>
          </Stack>
          <Button
            mt={4}
            variantColor='green'
            type='submit'
            onClick={handleSubmit}>
            Submit
          </Button>
        </FormControl>
      </StyledSignUpForm>
    </>
  )
}
