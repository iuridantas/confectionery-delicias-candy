import styled from 'styled-components';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 2px #ef1d2a;
  margin: 20px 0;
  transition: all 0.3s ease;
  width: 320px;

  img {
    margin: 10px auto;
    border-radius: 10px;
  }

  a {
    margin: 10px auto;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }

  h2 {
    font-size: 24px !important;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px auto;
    width: 90%;

    img {
      width: 250px;
      height: 250px;
    }

    h2 {
      font-size: 18px !important;
    }
  }
`;
