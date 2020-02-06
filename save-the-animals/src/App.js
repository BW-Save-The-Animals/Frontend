import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import Campaigns from './components/Campaigns'
import './components/App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function handleLogin() {
    setLoggedIn(true)
  }
  return (
    <ThemeProvider>
      <CSSReset />
      <div id='container'>
        <NavBar />
      </div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/campaigns'>
          <Campaigns />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}
export default App
