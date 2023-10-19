import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutHeading = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  font-size: 1.2em;
`;

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutContainer>
        <AboutHeading>About Me</AboutHeading>
        <AboutContent>
          Welcome to my world of web development! I'm Pooja, a dedicated web developer with a passion for creating intuitive and engaging user experiences. With a solid foundation in technologies like JavaScript, React, and Node.js, I love turning ideas into interactive digital solutions. My goal is to blend creativity with functionality, ensuring every project I undertake leaves a lasting impression.
        </AboutContent>
      </AboutContainer>
      <Footer />
    </div>
  );
};

export default About;
