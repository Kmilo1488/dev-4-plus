import React, { useState } from "react"
import styled from "styled-components"
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Text } from '../containers/language';
import { Grid, MenuItem, TextField, useMediaQuery } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl";
import ContactUsImg from "../images/ContactUs/contact-us.png"

const ContactUsContainer = styled.div`
  text-align: center;
  color: #A0A0A0;
  margin: 160px 0 120px;
`

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  
  @media (max-width: 767px) {
    font-size: 30px;
  }
`

const Space = styled.div`
  height: 15px;
  background-image: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  max-width: 20%;
  margin: 40px auto;
  border-radius: 30px;

  @media (max-width: 767px) {
    max-width: 30%;
    height: 7px !important;
    margin: 20px auto !important;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 50px auto;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20px !important;
    max-width: 75%;
    margin: 40px auto;
  }
`

const Gridheader = styled(Grid)`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  padding: 80px 20px 40px;
`

const FormContent = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 0 80px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: center;
  margin: 10px 40px;
  padding: 40px 30px;
  border:  2px;
  border-radius: 30px;
  box-shadow: 1px 6px 30px 0px rgba(50, 50, 50, 0.68);
  max-width: 80%;
  max-height: 100%;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 20px;
  }
`

const ImageGrid = styled(Grid)`
  display: flex;
  align-items: center;
`

const ImageContactUs = styled.img`
  max-width: 100%;
  max-height: auto;
`

const Button = styled.button`
  cursor: pointer;
  left:0;
  right:0;
  margin: 70px auto 0px;
  padding: 10px 40px;
  border: 0 solid transparent;
  background-image: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  background-repeat: no-repeat;
  border-radius: 20px;
  max-width: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const RespondTextForm = styled.p`
  margin-top: 50px;
`

let ContactUsSchema = Yup.object().shape({ 
  name: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  email: Yup.string()
    .min(1, 'Too Short!')
    .required('Required').email('Invalid email'),
  phone: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
  country: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  city: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
  budget: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  interesting: Yup.string()
    .min(1, 'Too Short!')
    .required('Required'),
  message: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
})

const countryOptions = [
  { value: "canada", label: "Canada" },
  { value: "colombia", label: "Colombia" },
  { value: "united states", label: "United States" },
];

const budgetOptions = [
  { value: "$2.000 - $5.000", label: "$2.000 - $5.000" },
  { value: "$5.000 - $10.000", label: "$5.000 - $10.000" },
  { value: "$10.000 - $50.000", label: "$10.000 - $50.000" },
  { value: "$50.000 - $100.000", label: "$50.000 - $100.000" },
  { value: "$100.000 + ", label: "$100.000 + " },
];

const interestingOptions = [
  { value: "personal", label: "Personal" },
  { value: "business", label: "Business / Negocios" },
];


const LabelBudget = () => {
  const matches = useMediaQuery('(min-width:1280px)');
  
  return matches ? <Text tkey="contact-us" tid="your-interesting" /> : <Text tkey="contact-us" tid="your-interesting-mobile" />
}

const ContactUs = () => {

  const [serverState, setServerState] = useState(null);

  const respondForm = () => {
    if (serverState === true ) {
      return <RespondTextForm><Text tkey="contact-us" tid="thanks" /></RespondTextForm>
    } else if (serverState !== null) {
      return <RespondTextForm><Text tkey="contact-us" tid="error" /></RespondTextForm>
    }
  }

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/mjvpenoe",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        setServerState(true)
      })
      .catch(error => {
        actions.setSubmitting(false);
        setServerState(false)
      });
  };

  return (
    <ContactUsContainer id="contact-us">
      <Title>
        <Text tkey="contact-us" tid="title" />
      </Title>
      <Space />
      <Copy>
        <Text tkey="contact-us" tid="copy" />
      </Copy>

      <Gridheader container >
        <FormContent container spacing={4} item sm={12} lg={6}>
          
          <Formik
            initialValues={{
              name:'',
              email:'',
              phone: '',
              country: '',
              city: '',
              budget: '',
              interesting: '',
              message: ''
            }}
            validationSchema={ContactUsSchema}
            onSubmit={handleOnSubmit}
          >

            {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid container item sm={12} lg={6}>
                    <TextField
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      touched={touched.name}
                      error={errors.name}
                      label={<Text tkey="contact-us" tid="your-name" />}
                      color="secondary"
                      fullWidth
                    />
                  </Grid>

                  <Grid container item sm={12} lg={6}> 
                    <TextField
                      id="email"
                      name="email"
                      value={values.email}
                      touched={touched.email}
                      onChange={handleChange}
                      error={errors.email}
                      label={<Text tkey="contact-us" tid="your-email" />}
                      color="secondary"
                      fullWidth
                    />
                  </Grid>

                  <Grid container item sm={12} lg={6}>
                    <TextField
                      id="phone"
                      name="phone"
                      value={values.phone}
                      touched={touched.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      label={<Text tkey="contact-us" tid="your-phone" />}
                      color="secondary"
                      multiline
                      fullWidth    
                    />
                  </Grid>

                  <Grid container item sm={12} lg={6}>
                    <FormControl size="medium" fullWidth>
                      <TextField
                        select
                        id="country"
                        name="country"
                        value={values.country}
                        touched={touched.country}
                        error={errors.country}
                        label={<Text tkey="contact-us" tid="your-country" />}
                        onChange={handleChange}
                        color="secondary"
                      >
                        {countryOptions.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid container item sm={12} lg={6}>
                    <TextField
                      id="city"
                      name="city"
                      value={values.city}
                      touched={touched.city}
                      onChange={handleChange}
                      error={errors.city}
                      label={<Text tkey="contact-us" tid="your-city" />}
                      color="secondary"
                      multiline
                      fullWidth    
                    />
                  </Grid>

                  <Grid container item sm={12} lg={6} >
                    <FormControl size="medium" fullWidth >
                      <TextField
                        select
                        id="budget"
                        name="budget"
                        value={values.budget}
                        touched={touched.budget}
                        error={errors.budget}
                        label={<Text tkey="contact-us" tid="your-budget" />}
                        onChange={handleChange}
                        color="secondary"
                      >
                        {budgetOptions.map((budget) => (
                          <MenuItem key={budget.value} value={budget.value}>
                            {budget.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>
                  
                  <Grid container item sm={12} >
                    <FormControl size="medium" fullWidth >
                      <TextField
                        select
                        id="interesting"
                        name="interesting"
                        value={values.interesting}
                        touched={touched.interesting}
                        error={errors.interesting}
                        label={<LabelBudget />}
                        onChange={handleChange}
                        color="secondary"
                      >
                        {interestingOptions.map((interesting) => (
                          <MenuItem key={interesting.value} value={interesting.value}>
                            {interesting.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Grid>

                  <Grid container item sm={12}>
                    <TextField
                      id="message"
                      name="message"
                      value={values.message}
                      touched={touched.message}
                      error={errors.message}
                      onChange={handleChange}
                      label={<Text tkey="contact-us" tid="your-messages" />}
                      color="secondary"
                      multiline
                      fullWidth  
                    />
                  </Grid>

                  <Button 
                    type='submit' 
                    disabled={isSubmitting}
                  >
                    <Text tkey="contact-us" tid="send" />
                  </Button>

                  
                </Grid>
                {respondForm()}
              </Form>
            )}
          </Formik>    
        </FormContent>
        <ImageGrid item sm={12} lg={6}>
          <ImageContactUs src={ContactUsImg} />
        </ImageGrid>
      </Gridheader>
    </ContactUsContainer>
  )
}

export default ContactUs