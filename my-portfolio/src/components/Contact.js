import React, { useState } from 'react';
import styled from 'styled-components';



  const ContactContainer = styled.section`
  padding: 60px 20px;
  background: black;
  text-align: center;
`;


const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 16px;
  resize: left;
`;

const Button = styled.button`
  padding: 10px;
  width:500px;
  margin-left:500px;
  background-color: #007bff;
  color: black;
  box-shadow: 5px 5px 5px white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
    box-shadow: 5px 5px 5px grey;
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${props => (props.success ? 'green' : 'green')};
  margin-top: 20px;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
// function showAlertAndRedirect(){
//   alert("message sent successful")
//   window.location.href="thank-you.html"
// }
  const handleSubmit = async (e,res) => {
    e.preventDefault();
    setStatus('Sending...');
  
    

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      

      if (response.ok) {
        setStatus('Message sent successfully');
        alert('Message sent successfully!');
        
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <ContactContainer class="bhu">
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Message:</Label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></Textarea>
        </div>
        <Button id="cmd" type="submit"onclick="showAlertAndRedirect()"><a href="thank-you.html">Send Message</a></Button>
      </Form>
      <StatusMessage success={status === 'Message sent successfully!'}>
        {status}
      </StatusMessage>
    </ContactContainer>
  );
}

export default Contact;

