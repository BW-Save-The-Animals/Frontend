import React, { useState } from 'react'
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

const FormContainer = styled.div`
  background-color: #cf9;
  width: 40vw;
  padding: 20px;
  margin: 0 auto;
`

export default function CreateCampaign() {
  let initialValues = {
    title: '',
    description: '',
    urgency_level: 1,
    funding_goal: 100,
    deadline: '',
    specie_id: 1,
    location: '',
  }
  let [formValues, setFormValues] = useState(initialValues)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(formValues)
    axios
      .post('https://save-all-the-animals.herokuapp.com/api/campaigns', {
        title: formValues.title,
        photo:
          'https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
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
    console.log('changing')
    console.log(e.target.type)
    if (e.target.type === 'select-one') {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.options[e.target.selectedIndex].text,
      })
      console.log(e.target.options[e.target.selectedIndex].index.toString())
    } else {
      console.log('in else')
      console.log(formValues)
      console.log(e.target.value)
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  }
  return (
    <React.Fragment>
      <NavBar page='signout' />
      <CampaignContainer>
        <Heading>Create a Campaign</Heading>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Stack w='30vw' m='0 auto'>
                <Input
                  name='title'
                  placeholder='Title'
                  value={formValues.title}
                  onChange={handleChange}
                  size='md'
                />
                <Textarea
                  name='description'
                  placeholder='Describe your campaign in a few words'
                  value={formValues.description}
                  onChange={handleChange}
                />
                <Input
                  name='location'
                  placeholder='Location'
                  size='md'
                  onChange={handleChange}
                />
                <FormHelperText>Urgency Between 1-5</FormHelperText>
                <NumberInput
                  name='urgency_level'
                  min={1}
                  max={5}
                  defaultValue={initialValues.urgency_level}
                  value={formValues.urgency_level}
                  clampValueOnBlur={false}>
                  <NumberInputField />
                  <NumberInputStepper onChange={handleChange}>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText>Funding Goal</FormHelperText>
                <NumberInput
                  defaultValue={100}
                  name='funding_goal'
                  step={100}
                  min={100}
                  max={50000}
                  value={formValues.funding_goal}
                  onChange={handleChange}
                  clampValueOnBlur={false}>
                  <NumberInputField />
                  <NumberInputStepper onChange={handleChange}>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <FormHelperText>Species ID</FormHelperText>
                <NumberInput
                  name='specie_id'
                  defaultValue={1}
                  min={1}
                  max={12}
                  value={formValues.specie_id}
                  onChange={handleChange}
                  clampValueOnBlur={false}>
                  <NumberInputField />
                  <NumberInputStepper onChange={handleChange}>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Input
                  name='deadline'
                  placeholder='Deadline: DD/MM/YY'
                  value={formValues.deadline}
                  onChange={handleChange}
                  size='md'
                />
                <Button mt={4} variantColor='green' type='submit'>
                  Submit
                </Button>
              </Stack>
            </FormControl>
          </form>
        </FormContainer>
      </CampaignContainer>
    </React.Fragment>
  )
}
