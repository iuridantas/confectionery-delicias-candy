import styled from 'styled-components';

export const TimesSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 1440px;

  h2 {
    font-size: 32px;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    line-height: 1.5;
  }

  .openingHours {
    font-size: 22px;
  }

  div {
    margin-top: 20px;
  }

  button {
    margin: 0 auto;
    cursor: pointer;
    color: #e36369;
    font-size: 24px;
    margin-top: 10px;
    border-radius: 8px;
    width: 250px;
    padding: 5px;
    border: none;
    transition: all 0.3s ease-in-out;
    background: none;
  }

  button:hover {
    box-shadow: 0px 3px 3px#000000;
    transform: translate(0px, -2px);
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 22px;
      margin: auto;
    }

    h3 {
      font-size: 20px;
    }

    .openingHours {
      font-size: 16px;
    }

    button {
      font-size: 16px;
      transition: none;
    }

    button:hover {
      box-shadow: none;
      transform: none;
    }
  }
`;
