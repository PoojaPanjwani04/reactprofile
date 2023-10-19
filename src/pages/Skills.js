import React from 'react';
import styled from 'styled-components';
import node from "./node.png";
import js from "./js.png";
import react from "./react.png";
import python from "./python.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SkillsHeading = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const SkillsTableContainer = styled.div`
  overflow-x: auto;
`;

const SkillsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const SkillsThTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const SkillsTh = styled.th`
  background-color: #f2f2f2;
`;

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Node.js",
      image: node,
    },
    {
      name: "Python",
      image: python,
    },
  ];

  return (
    <div>
      <Navbar />
      <SkillsContainer>
        <SkillsHeading>Skills</SkillsHeading>
        <SkillsTableContainer>
          <SkillsTable>
            <thead>
              <tr>
                <SkillsTh>Skill</SkillsTh>
                <SkillsTh>Image</SkillsTh>
              </tr>
            </thead>
            <tbody>
              {skills.map((item) => (
                <tr key={item.name}>
                  <SkillsThTd>{item.name}</SkillsThTd>
                  <SkillsThTd>
                    <img src={item.image} width={"100px"} alt={item.name} />
                  </SkillsThTd>
                </tr>
              ))}
            </tbody>
          </SkillsTable>
        </SkillsTableContainer>
      </SkillsContainer>
      <Footer />
    </div>
  );
};

export default Skills;
