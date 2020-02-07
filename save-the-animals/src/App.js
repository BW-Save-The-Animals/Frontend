// import libraries
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

// import components
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Campaigns from './components/Campaigns'
import CampaignsDetails from './components/CampaignDetails'
import CreateCampaign from './components/CreateCampaign'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
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
        <Route exact path='/campaigns'>
          <Campaigns />
        </Route>
        <Route path='/campaign/:id'>
          <CampaignsDetails />
        </Route>
        <Route path='/campaigns/create'>
          <CreateCampaign />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}
export default App
