import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'

function App() {
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
      </Switch>
    </ThemeProvider>
  )
}
export default App
