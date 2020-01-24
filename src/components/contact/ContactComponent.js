import React, { Component } from 'react';
import './ContactComponent.css';
export default class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  };
  handleSubmit = event => {
    const templateId = 'template_G5ZdNxC7';
    this.sendFeedback(templateId, {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    });
  };

  sendFeedback(templateId, variables) {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        console.log('Email successfully sent!');
      })
      .catch(err =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }
  render() {
    return (
      <div className='contact-wrapper'>
        <div className='container'>
          <h1>Contact Me</h1>
          <div className='contact-inner'>
            <div className='contact-item'>
              <h4>Office</h4>
              <p>+92 51 552 9723</p>
              <p>+92 51 552 9724</p>
              <h4>Cell</h4>
              <p>+92 332 503 9857</p>
              <h4>Email</h4>
              <p>sdr.yasir@gmail.com</p>
              <p>sdr.yasir@hotmail.com</p>
              <h4>Address</h4>
              <p>
                Grindlays Market, Near Standard Chartered Bank, Saddar -
                Rawalpindi, Pakistan.
              </p>
            </div>
            <div className='contact-item'>
              <div className='contact-form'>
                <div className='input-item-wrapper'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input
                    type='text'
                    onChange={this.handleNameChange}
                    placeholder='Enter your name here'
                    value={this.state.name}
                  />
                </div>
                <div className='input-item-wrapper'>
                  <label htmlFor='email'>Email </label>
                  <input
                    type='text'
                    onChange={this.handleEmailChange}
                    placeholder='Enter your email '
                    value={this.state.email}
                  />
                </div>
                <div className='input-item-wrapper'>
                  <label htmlFor='message'>Message </label>
                  <textarea
                    onChange={this.handleMessageChange}
                    placeholder='Enter Message'
                    cols='60'
                    rows='8'>
                    {this.state.message}
                  </textarea>
                </div>
                <div className='input-item-wrapper'>
                  <button onClick={this.handleSubmit}>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
