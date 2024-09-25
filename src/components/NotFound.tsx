import styled from 'styled-components';
import { notfound } from '../assets/assets';
import colors from '../assets/Colors';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7fafc;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #275625;
  font-weight: 500;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  max-width: 50rem;
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700; 
  color: #275625; 
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.6rem; 
  font-weight: 300; 
  line-height: 1.6;
  margin: 0;
`;

const Description = styled.p`
  margin-bottom: 3rem; 
`;

const BackButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem; 
  font-weight: 500; 
  color: #fff; 
  background-color: ${colors.black}; 
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out; 

  &:hover, &:active {
    background-color: ${colors.redQuaternary}; 
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const NotFoundImage = styled.img`
  width: 100%; 
  height: auto; 
  object-fit: contain; 
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>404</Title>
          <Subtitle>Sorry we couldn't find this page.</Subtitle>
          <Description>
            But don't worry, you can find plenty of other things on our homepage.
          </Description>
          <Link to="/"><BackButton>back to home</BackButton></Link>
        </Content>
        <ImageContainer>
          <NotFoundImage src={notfound} alt="Not Found" />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};

export default NotFound;