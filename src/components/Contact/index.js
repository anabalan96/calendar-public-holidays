import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer from '../Footer';
import './index.css';


class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'balan.ana9689@gmail.com',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'balan_ana9689_gmail_com',
      'template_y35CQspr',
      templateParams,
      'user_hz1n7yVR0NWmuHe4T7n5s'
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <>
        <section className="contact-container">
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
              </Button>
          </Form>
        </section>
        <Footer />
      </>
    )
  }
}

export default Contact;
