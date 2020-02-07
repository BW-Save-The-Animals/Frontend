import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Box, FormControl, Stack, Input, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'
import NavBar from './NavBar'

const StyledLogin = styled.div`
  width: 240px;
  margin: 0 auto;
`

export default function Login(props) {
  const initialValues = {
    email: '',
    password: '',
  }
  const [loginValues, setLoginValues] = useState(initialValues)
  const pageHistory = useHistory()

  const handleChange = e => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    axios
      .post(
        'https://save-all-the-animals.herokuapp.com/api/auth/login',
        {
          email: loginValues.email,
          password: loginValues.password,
        },
        { withCredentials: true },
      )
      .then(res => {
        console.log(res.data)
        if (res.data.type === 1) {
          pageHistory.push('/campaigns')
        } else if (res.data.type === 2) {
          pageHistory.push('/campaigns/create')
        }
      })
      .catch(err => console.error(err))
    setLoginValues(initialValues)
  }

  return (
    <React.Fragment>
      <NavBar page='login' />
      <StyledLogin>
        <Box w='25vw' p={4} color='black' borderColor='grey'>
          <h1
            style={{
              fontFamily: 'Stardos Stencil',
              fontSize: '25px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Login
          </h1>
          <form onSubmit={props.onSubmit}>
            <FormControl>
              <Stack spacing={3}>
                <Input
                  type='email'
                  placeholder='email'
                  name='email'
                  value={loginValues.email}
                  onChange={handleChange}
                />
                <Input
                  type='password'
                  placeholder='password'
                  name='password'
                  value={loginValues.password}
                  onChange={handleChange}
                />
                <Button
                  variantColor='teal'
                  w='100%'
                  tyep='submit'
                  onClick={handleSubmit}>
                  Login
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Box>
      </StyledLogin>
    </React.Fragment>
  )
}
