import React from 'react';
import styled from 'styled-components';
import profile from "../pages/profile.png"


const Link = styled.nav`
display:inline-flex;
color: white;
text-decoration: none;
font-size: 16px;
margin: 10px;
`;

const Nav = styled.div`
  background-color: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:65px;
  padding:10px
`;

const Navbar = () => {
  return (
    <div>
    <Nav>
    <img src={profile} width="75px" style={{borderRadius:"37.5px"}}  alt='this is logo' />
    
    <nav>
    
    <Link>
      <a href="/about">About</a>
      </Link>
      <Link>
      <a href="/skills">Skills</a>
      </Link>
      <Link>
      <a href="/contact">Contact Me</a>
      </Link>
    
    </nav>
    </Nav>
    </div>
  );
};

export default Navbar;
