import React, { useState, useEffect, useRef } from 'react'
import { Box, Image, Button } from '@chakra-ui/core'

import NavBar from './NavBar'
import styled from '@emotion/styled'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core'
import { Progress } from '@chakra-ui/core'

const CampaignHeading = styled.h1`
  font-family: 'Stardos Stencil';
  font-size: 46px;
  text-align: center;
  text-decoration: underline;
`

const CampaignDetails = props => {
  const { id } = useParams()
  const [campaign, setCampaign] = useState([])

  const amountRef = useRef()

  useEffect(() => {
    axios
      .get('https://save-all-the-animals.herokuapp.com/api/campaigns/' + id, {
        withCredentials: true,
      })
      .then(res => {
        setCampaign(res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  const donate = () => {

    setCampaign({
      ...campaign,
      total_Amount_Received_For_This_Campaign:
        parseInt(campaign.total_Amount_Received_For_This_Campaign) +
        parseInt(amountRef.current.value),
    })
    axios
      .post(
        'https://save-all-the-animals.herokuapp.com/api/campaigns/' +
          id +
          '/donate',
        {
          donation_amount: amountRef.current.value,
        },
        { withCredentials: true },
      )
      .then(res => {
        // if (!res.data.token) {
        //   setError(res.data.message)
        // } else {
        //   localStorage.setItem('token', res.data.token)
        //   history.push('/jokes')
        // }
      })
      .catch(error => {
        // Alert a sensible message pulled from the error object
        // alert(error.message);
        // setError(error.message)
      })
  }

  return (
    <div>
      <NavBar page='signout' />
      <CampaignHeading>{campaign.title}</CampaignHeading>
      <div
        style={{
          backgroundImage: 'url(' + campaign.photo + ')',
          height: '300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}></div>
      <p style={{ fontSize: '23px' }}>{campaign.description}</p>
      Details:
      <p style={{}}>Goal: {campaign.funding_goal}</p>
      <p style={{}}>
        Funded: {campaign.total_Amount_Received_For_This_Campaign}
      </p>
      <p style={{}}>Deadline: {campaign.deadline}</p>
      <p style={{}}>Location: {campaign.location}</p>
      <h2>Progress:</h2>
      {/* <Progress color='green' size='sm' value={20} /> */}
      <Progress
        color='green'
        size='md'
        value={
          (campaign.total_Amount_Received_For_This_Campaign /
            campaign.funding_goal) *
          100
        }
      />
      <br />
      <h2>Donate:</h2>
      <form action=''>
        {/* <input type='number' ref={amountRef} id='' /> */}
        <NumberInput min={1} max={1000000} defaultValue={10}>
          <NumberInputField ref={amountRef} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button variantColor='green' onClick={e => donate()}>
          Donate
        </Button>
      </form>
      <br />
      <br />
      <div>
        {campaign.perks &&
          campaign.perks.map(perk => {
            return (
              <div style={{ border: '1px solid blue' }}>
                <p>{perk.title}</p>
                <p>{perk.description}</p>
                <p>{perk.amount}</p>
                <Button variantColor='green'>BUY PERK</Button>
              </div>
            )
          })}
      </div>
      {/* {JSON.stringify(campaign)} */}
    </div>
  )
}

export default CampaignDetails
