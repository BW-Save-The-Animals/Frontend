import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
  const initialValues = {
    title: '',
    description: '',
    urgency_level: 1,
    funding_goal: 100,
    deadline: '',
    specie_id: 1,
    location: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValues)
    axios
      .post('https://save-all-the-animals.herokuapp.com/api/campaigns', {
        title: formValues.title,
        photo: '',
        description: formValues.description,
        urgency_level: formValues.urgency_level,
        funding_goal: formValues.funding_goal,
        deadline: formValues.deadline,
        specie_id: formValues.specie_id,
        location: formValues.location,
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
    setFormValues(initialValues)
  }
  const handleChange = e => {
    if (e.target.type === 'select-one') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.options[
          e.target.selectedIndex
        ].index.toString(),
      })
      console.log(e.target.options[e.target.selectedIndex].index.toString())
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  }
  return (
    <React.Fragment>
      <NavBar page='signout' />
      <CampaignContainer>
        <Heading>Create a Campaign</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Stack w='30vw' m='0 auto'>
              <Input
                placeholder='Title'
                value={initialValues.title}
                onChange={handleChange}
                size='md'
              />
              <Textarea
                name='description'
                placeholder='Describe your campaign in a few words'
                value={initialValues.description}
                onChange={handleChange}
              />
              <Input placeholder='Location' size='md' />
              <FormHelperText>Urgency Between 1-5</FormHelperText>
              <NumberInput
                min={1}
                max={5}
                defaultValue={initialValues.urgency_level}
                value={initialValues.urgency_level}
                onChange={handleChange}
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
                value={initialValues.funding_goal}
                onChange={handleChange}
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
                value={initialValues.specie_id}
                onChange={handleChange}
                clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Input
                placeholder='Deadline: DD/MM/YY'
                value={initialValues.deadline}
                onChange={handleChange}
                size='md'
              />
              <Button mt={4} variantColor='green' type='submit'>
                Submit
              </Button>
            </Stack>
          </FormControl>
        </form>
      </CampaignContainer>
    </React.Fragment>
  )
}
