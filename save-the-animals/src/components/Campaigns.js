import React, { useState, useEffect } from 'react'
import Campaign from './Campaign'
import styled from '@emotion/styled'
import NavBar from './NavBar'
import axios from 'axios'

const CampaignHeading = styled.h1`
  font-family: 'Stardos Stencil';
  font-size: 46px;
  text-align: center;
  text-decoration: underline;
`
const CampaignCards = styled.div`
  width: 85vw;
  padding: 12px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`

const api_url = 'https://save-all-the-animals.herokuapp.com/api/users/campaigns'

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([])
  useEffect(() => {
    axios
      .get(api_url, { withCredentials: true })
      .then(res => {
        setCampaigns(res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <React.Fragment>
      <NavBar page='signout' />
      <CampaignHeading>Campaigns</CampaignHeading>
      <CampaignCards>
        {campaigns.map(campaign => {
          const {
            id,
            title,
            description,
            funding_goal,
            deadline,
            location,
            photo,
          } = campaign
          return (
            <Campaign
              key={id}
              id={id}
              title={title}
              description={description}
              funding_goal={funding_goal}
              deadline={deadline}
              location={location}
              photo={photo}
            />
          )
        })}
      </CampaignCards>
    </React.Fragment>
  )
}
