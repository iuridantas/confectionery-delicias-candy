import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    font-size: 32px;
    justify-content: center;
    margin: 10px auto 0 auto;
  }

  h2 {
    display: flex;
    font-size: 30px;
    align-items: center;
  }

  p {
    font-size: 20px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 30px 40px 10px;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      margin: 0 20px;
      text-align: center;
    }
  }
`;

export const CakeSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 20px auto;
  max-width: 1440px;
`;
