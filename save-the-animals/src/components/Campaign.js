import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/core'

const Campaign = props => {
  return (
    <Box maxW='sm' borderWidth='1px' rounded='lg' overflow='hidden'>
      <Image src={props.photo} alt={props.title} />

      <Box p='6'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h3'
          lineHeight='tight'
          isTruncated>
          {props.title}
        </Box>

        <Box>Funding goal: ${props.funding_goal}</Box>
        <Box>Location: ${props.location}</Box>
        <Box>Deadline: ${props.deadline}</Box>
      </Box>
    </Box>
  )
}

export default Campaign
