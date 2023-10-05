import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-shadow: 0 0 10px black;
  padding: 10px 20px 10px 20px;
  margin: 35px auto;

  @media only screen and (min-width: 768px) and (max-width: 900px){
    margin: 80px auto;
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    margin: 250px auto;
  }
`;
