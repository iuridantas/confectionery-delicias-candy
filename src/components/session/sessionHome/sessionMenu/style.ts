import styled from 'styled-components';

export const HomeMenuSession = styled.div`
  margin: 10px auto;
  max-width: 1440px;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  h1 {
    font-size: 32px;
    margin: 20px auto 0 auto;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 22px;
      margin: auto;
    }
  }
`;
