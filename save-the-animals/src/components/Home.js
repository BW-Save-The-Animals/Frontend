import React from 'react'
import NavBar from './NavBar'

export default function Home() {
  return (
    <React.Fragment>
      <NavBar page='all' />
      <img
        src='https://images.unsplash.com/photo-1521651201144-634f700b36ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        alt='hero - elephant and mother'
      />
    </React.Fragment>
  )
}
