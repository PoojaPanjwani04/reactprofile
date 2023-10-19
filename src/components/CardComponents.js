import styled from "styled-components";
const Card = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:20px
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardLink = styled.a`
  color: black;
  text-decoration: none;
`;

const CardComponent = ({ image, description, githubLink }) => {
  return (
    <Card>
      <CardImage src={image} alt={description} />
      <CardBody>
        <p>{description}</p>
        <CardLink href={githubLink}>View on GitHub</CardLink>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
