import React from 'react'
import NavBar from './NavBar'
import Landing from './Landing'

export default function Home() {
  return (
    <React.Fragment>
      <NavBar page='all' />
      <Landing />
    </React.Fragment>
  )
}
