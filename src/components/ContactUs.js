import React, { useState } from "react"
import styled from "styled-components"
import { Text } from '../containers/language';
import { Grid, TextField } from "@material-ui/core"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import ContactUsImg from "../images/ContactUs/contact-us.png"

const useStyles = makeStyles({
  form: {
    width: '100%',
  },
});

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

const FormItems = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
  }
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
  margin-top: 70px;
  padding: 10px 0;
  border: 0 solid transparent;
  background-image: linear-gradient(45deg, rgba(236,41,41,1), rgba(83,1,1,1));
  background-repeat: no-repeat;
  border-radius: 20px;
  max-width: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const ContactUs = () => {

  const classes = useStyles();

  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

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
        <FormContent container spacing={4} item xs={12} md={5}>
          <Form
            className={classes.form}
            noValidate
            onSubmit={submitForm}
            action="https://formspree.io/f/xaylevkr"
            method="POST">
            
            <FormItems>
              <TextField
                id="name"
                name="name"
                label={<Text tkey="contact-us" tid="your-name" />}
                color="secondary"
                margin="normal"
              />

              <TextField
                id="email"
                name="email"
                label={<Text tkey="contact-us" tid="your-email" />}
                color="secondary"
                margin="normal"
              />
            </FormItems>

            <FormItems>
              <TextField
                id="phone"
                name="phone"
                label={<Text tkey="contact-us" tid="your-phone" />}
                color="secondary"
                margin="normal"
                multiline
              />

              <TextField
                id="message"
                name="message"
                label={<Text tkey="contact-us" tid="your-messages" />}
                color="secondary"
                margin="normal"
                multiline
              />
            </FormItems>

            <FormItems>
              <FormControl size="medium">
                <InputLabel color="secondary" htmlFor="budget-label">
                  <Text tkey="contact-us" tid="your-budget" />
                </InputLabel>
                <Select
                  native
                  id="budget"
                  name="budget"
                  color="secondary"
                  inputProps={{
                    name: "budget",
                    id: "budget-label"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="$2.000 - $3.000">$2.000 - $3.000</option>
                  <option value="$3.000 - $10.000">$3.000 - $10.000</option>
                  <option value="$10.000 - $30.000">$10.000 - $30.000</option>
                  <option value="$30.000 - $100.000">$30.000 - $100.000</option>
                  <option value="$100.000 + ">$100.000 + </option>           
                </Select>
              </FormControl>
                
              <FormControl size="medium">
                <InputLabel color="secondary" htmlFor="country-label">
                  <Text tkey="contact-us" tid="your-country" />
                </InputLabel>
                <Select
                  native
                  id="country"
                  name="country"
                  color="secondary"
                  inputProps={{
                    name: "budget",
                    id: "country-label"
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="Canada">Canada</option>
                  <option value="Colombia">Colombia</option>
                  <option value="United States">United States</option>
                </Select>
              </FormControl>
            </FormItems>

            <>
              {status === "SUCCESS" ? <p><Text tkey="contact-us" tid="thanks" /></p> : <Button><Text tkey="contact-us" tid="send" /></Button>}
              {status === "ERROR" && <p><Text tkey="contact-us" tid="error" /></p>}
            </>      
          </Form>
        </FormContent>
        <ImageGrid item xs={12} md={5}>
          <ImageContactUs src={ContactUsImg} />
        </ImageGrid>
      </Gridheader>
    </ContactUsContainer>
  )
}

export default ContactUs