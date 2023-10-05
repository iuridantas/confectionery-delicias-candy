import styled from 'styled-components';

export const SocialMediaSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  max-width: 1440px;

  div {
    display: flex;
    text-align: center;
  }

  h1 {
    font-size: 32px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 30px 40px 10px;
  }

  h2 {
    display: flex;
    font-size: 30px;
    align-items: center;
  }

  p {
    display: flex;
    font-size: 22px;
    align-items: center;
  }

  span {
    margin-right: 5px;
  }

  @media only screen and (max-width: 600px) {
    div {
      flex-direction: column;
      margin-top: 10px;
    }

    h1 {
      font-size: 22px;
      margin: auto;
    }

    h2 {
      font-size: 20px;
    }

    a {
      margin: 5px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
