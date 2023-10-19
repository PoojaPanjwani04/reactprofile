import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FormContainer = styled.div`
  max-width: 400px;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9; 
`;

const NameInput = styled.input`
  width: 100%;
  height: 40px; /* Adjusted height */
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #cc99ff;
  color: white;
  padding: 10px 20px;
  margin-top: 30px;
  border: none; /* Removed border */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a64dff;
  }
`;

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/result?name=${name}&email=${email}`);
  };

  return (
    <div>
      <Navbar />
      <FormContainer>
        <form>
          <div>
            <h1>Contact Us</h1>

            <label htmlFor="name">Name : </label>
            <NameInput
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email : </label>
            <NameInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <SubmitButton type="button" onClick={handleSubmit}>
              Submit
            </SubmitButton>
          </div>
        </form>
      </FormContainer>
      <Footer />
    </div>
  );
}

export default ContactMe;
