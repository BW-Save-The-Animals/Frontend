import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonGroup, Button } from '@chakra-ui/core'
import styled from '@emotion/styled'
import axios from 'axios'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  border-bottom: 1px solid gray;
  box-shadow: 2px 6px 6px grey;
  padding: 12px;
  margin-bottom: 24px;
`

const StyledHeading = styled.h1`
  font-family: 'Handlee';
  font-size: 40px;
  color: #05ce78;
  margin-top: -10px;
  font-weight: bold;
`

const NavBar = props => {
  function handleSignOut() {
    axios
      .get('https://save-all-the-animals.herokuapp.com/api/auth/logout')
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }
  let btnToShow = ''
  if (props.page === 'all') {
    btnToShow = (
      <>
        <Button as={Link} to='/login' m={2} variantColor='blue' size='md'>
          Log In
        </Button>
        <Button as={Link} to='/signup' variantColor='green' size='md'>
          Sign Up
        </Button>
      </>
    )
  } else if (props.page === 'login') {
    btnToShow = (
      <Button as={Link} to='/signup' variantColor='green' size='md'>
        Sign Up
      </Button>
    )
  } else if (props.page === 'signup') {
    btnToShow = (
      <Button as={Link} to='/login' variantColor='blue' size='md'>
        Log In
      </Button>
    )
  } else if (props.page === 'signout') {
    btnToShow = (
      <Button
        as={Link}
        to='/'
        variantColor='blue'
        size='md'
        onClick={handleSignOut}>
        Sign Out
      </Button>
    )
  }
  return (
    <StyledNav>
      <StyledHeading as={Link} to='/'>
        keycon
      </StyledHeading>
      <ButtonGroup spacing={6}>{btnToShow}</ButtonGroup>
    </StyledNav>
  )
}

export default NavBar
