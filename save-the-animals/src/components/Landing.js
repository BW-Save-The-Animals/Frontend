import React from 'react'
import { Box, Image } from '@chakra-ui/core'
import styled from '@emotion/styled'
let imgUrl =
  'https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80'
const StyledHero = styled.div`
  margin-top: -24px;
  position: relative;
  text-align: left;
  background-image: url(${imgUrl});
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  div {
    width: 35%;
    position: absolute;
    top: 30%;
    left: 60%;
    color: #fff;

    h1 {
      font-size: 2rem;
      font-weight: bolder;
    }
    p {
      font-size: 1.2rem;
    }
  }
`

const PageSection = styled.section`
  padding: 10px;
  h1 {
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
  }
`

const StyledTeam = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
  justify-content: center;
  div {
    text-align: center;
    width: 30%;
    margin: 20px 10px;
    font-size: 1.2rem;
    img {
      width: 50%;
      display: inline;
      border-radius: 50%;
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #38a169;
  color: #fff;
  font-size: 1.5rem;
  padding: 20px;
`

const team = [
  {
    name: 'Idir Abderahim',
    role: 'Backend Developer',
    img: 'https://ca.slack-edge.com/T4JUEB3ME-ULQ6GE9MF-dff1ea60b96f-72',
  },
  {
    name: 'Rodrigo Graça ',
    role: 'Backend Developer',
    img: 'https://ca.slack-edge.com/T4JUEB3ME-UNM9C9G4W-gb34f66f0b1d-72',
  },

  {
    name: "Olamide 'Ola' Oredola",
    role: 'Backend Developer',
    img: 'https://ca.slack-edge.com/T4JUEB3ME-UM3NF5BTQ-f7cf3f2c495e-72',
  },
  {
    name: 'Austin Walela ',
    role: 'Frontend Developer',
    img: 'https://ca.slack-edge.com/T4JUEB3ME-UM0377T7G-e04a40031986-72',
  },
  {
    name: 'Nabeelah Yousuph',
    role: 'Team Lead',
    img: 'https://ca.slack-edge.com/T4JUEB3ME-UJ1UFCGT1-13862a6caa72-72',
  },
]

const Landing = () => {
  return (
    <>
      <StyledHero>
        {/* <div className='img'>
          <img src='https://images.unsplash.com/photo-1471079502516-250c19af6928?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80' />
        </div> */}

        <div>
          <h1>Welcome to KeyCon!</h1>
          <p>
            We help connect organisations that want to help or protect animals
            to people that want to join and support these causes by donating to
            them.
          </p>
        </div>
      </StyledHero>
      <PageSection>
        <h1>Team Members</h1>
        <StyledTeam>
          {team.map(t => (
            <div>
              <img src={t.img} alt='team profile' />
              <p>{t.name}</p>
              <p>{t.role}</p>
            </div>
          ))}
        </StyledTeam>
      </PageSection>
      <Footer>
        <p>Made with 💪🏽 and 🤯</p>
      </Footer>
    </>
  )
}

export default Landing
