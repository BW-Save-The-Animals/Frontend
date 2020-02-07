import React, { useState, useEffect } from 'react'
import {
  FormControl,
  Button,
  FormHelperText,
  Input,
  Stack,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/core'
import NavBar from './NavBar'
import styled from '@emotion/styled'

const CampaignContainer = styled.div`
  width: 960px;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-family: 'Stardos Stencil';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 10px;
`

export default function CreateCampaign() {
  return (
    <React.Fragment>
      <NavBar page='signout' />
      <CampaignContainer>
        <Heading>Create a Campaign</Heading>
        <FormControl>
          <Stack w='30vw' m='0 auto'>
            <Input placeholder='Title' size='md' />
            <Textarea
              name='description'
              placeholder='Describe your campaign in a few words'
            />
            <Input placeholder='Location' size='md' />
            <FormHelperText>Urgency Between 1-5</FormHelperText>
            <NumberInput
              defaultValue={1}
              min={1}
              max={5}
              clampValueOnBlur={false}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Funding Goal</FormHelperText>
            <NumberInput
              defaultValue={100}
              step={100}
              min={100}
              max={50000}
              clampValueOnBlur={false}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Species ID</FormHelperText>
            <NumberInput
              defaultValue={1}
              min={1}
              max={12}
              clampValueOnBlur={false}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Input placeholder='Deadline: DD/MM/YY' size='md' />
            <Button mt={4} variantColor='green' type='submit'>
              Submit
            </Button>
          </Stack>
        </FormControl>
      </CampaignContainer>
    </React.Fragment>
  )
}
