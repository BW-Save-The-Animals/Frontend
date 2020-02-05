import React from 'react'
import {
  Box,
  FormControl,
  Stack,
  Input,
  Button,
  Heading,
} from '@chakra-ui/core'
import styled from '@emotion/styled'

const StyledLogin = styled.div`
  width: 240px;
  margin: 0 auto;
`

export default function Login() {
  return (
    <StyledLogin>
      <Box
        w='25vw'
        border='1px'
        borderRadius='md'
        p={4}
        color='black'
        borderColor='grey'>
        <Heading>Login</Heading>
        <FormControl>
          <Stack spacing={3}>
            <Input placeholder='email' size='md' />
            <Input placeholder='password' size='md' />
            <Button variantColor='teal' m={2} size='lg' variant='solid'>
              Login
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </StyledLogin>
  )
}
