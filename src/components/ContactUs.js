import React, { useState } from "react"
import styled from "styled-components"
import { Text } from '../containers/language';
import { Grid, TextField } from "@material-ui/core"
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
  margin: 40px 0;
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
  margin: 70px auto;
  border-radius: 30px;

  @media (max-width: 767px) {
    height: 7px !important;
    margin: 40px auto !important;
  }
`

const Copy = styled.p`
  font-size: 30px;
  max-width: 50%;
  margin: 70px auto;

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
  padding: 0 20px;
`

const FormContent = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  margin: 5px, 20px;
`

const ImageContactUs = styled.img`
  max-width: 100%;
  max-height: auto;
  margin-top: 40px;
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
            <TextField
              id="name"
              label={<Text tkey="contact-us" tid="your-name" />}
              color="secondary"
              margin="normal"
              fullWidth
            />

            <TextField
              id="email"
              label={<Text tkey="contact-us" tid="your-email" />}
              color="secondary"
              margin="normal"
              fullWidth

            />
            <TextField
              id="message"
              label={<Text tkey="contact-us" tid="your-messages" />}
              color="secondary"
              margin="normal"
              fullWidth
              multiline
            />

            <>
              {status === "SUCCESS" ? <p><Text tkey="contact-us" tid="thanks" /></p> : <Button><Text tkey="contact-us" tid="send" /></Button>}
              {status === "ERROR" && <p><Text tkey="contact-us" tid="error" /></p>}
            </>      
          </Form>
        </FormContent>
        <ImageGrid container item xs={12} md={5}>
          <ImageContactUs src={ContactUsImg} />
        </ImageGrid>
      </Gridheader>
    </ContactUsContainer>
  )
}

export default ContactUs