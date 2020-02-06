import React from 'react'
import data from '../assets/campaignData'
import Campaign from './Campaign'

export default function Campaigns() {
  console.log(data)
  return (
    <>
      <h1>Campaigns</h1>
      <div className='campaigns'>
        {data.map(campaign => {
          const {
            title,
            description,
            funding_goal,
            deadline,
            location,
            photo,
          } = campaign
          return (
            <Campaign
              title={title}
              description={description}
              funding_goal={funding_goal}
              deadline={deadline}
              location={location}
              photo={photo}
            />
          )
        })}
      </div>
    </>
  )
}
