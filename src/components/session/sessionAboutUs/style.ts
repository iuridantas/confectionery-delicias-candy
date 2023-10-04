import styled from 'styled-components';

export const AboutUsSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 1440px;

  h1 {
    font-size: 32px;
    text-align: center;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  p {
    margin: 10px 30px;
    text-align: justify;
    font-size: 22px;
  }

  .end {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
      margin: auto;
    }

    h2 {
      font-size: 20px;
      margin: auto;
    }

    p {
      margin: 10px 20px;
      font-size: 16px;
    }
  }
`;
