import styled from 'styled-components';

export const FillingSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  max-width: 1440px;

  h2 {
    font-size: 30px;
    margin: 10px auto;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  p {
    text-align: justify;
    max-width: 550px;
    margin: 10px auto;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 10px auto;
    align-items: center;
    display: flex;
    font-size: 20px;
  }

  input {
    margin: auto 0 auto 10px;
  }

  .column {
    display: flex;
  }

  .filling {
    margin: 10px 50px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
      margin: 10px;
      text-align: center;
    }

    p {
      font-size: 16px;
      margin: 10px;
    }

    label {
      font-size: 16px;
    }

    .column {
      margin: 0 auto;
    }

    .filling {
      margin: 10px 25px;
    }

    input {
      margin: auto 0 auto 5px;
    }
  }
`;
