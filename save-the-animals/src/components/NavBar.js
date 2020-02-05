import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, ButtonGroup, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const NavBar = () => {
  return (
    <StyledNav>
      <Heading>Key Conservation</Heading>
      <ButtonGroup spacing={6}>
        <Button variantColor='blue' size='lg'>
          <Link to='/login'>Login</Link>
        </Button>
        <Button variantColor='green' size='lg'>
          <Link to='/signup'>Sign Up</Link>
        </Button>
      </ButtonGroup>
    </StyledNav>
  )
}

export default NavBar
