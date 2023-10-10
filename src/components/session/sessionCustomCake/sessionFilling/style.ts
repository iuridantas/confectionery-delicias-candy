import styled from 'styled-components';

export const FillingSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  max-width: 1440px;

  h2{
    display: flex;
    justify-content: center;
  }

  h3{
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin: 10px auto;
    align-items: center;
    display: flex;
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
  }
`;
