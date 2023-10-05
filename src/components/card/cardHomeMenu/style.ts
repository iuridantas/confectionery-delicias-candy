import styled from 'styled-components';

export const CardSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  transform: translate(0px, 0px);
  transition: all 0.3s ease-in-out;
  width: 310px;

  &:hover {
    box-shadow: 0px 3px 3px #000000;
    transform: translate(0px, -5px);
  }

  img {
    width: 200px;
    height: 200px;
    margin: 10px auto;
    border-radius: 5px;
  }

  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }

  h2 {
    font-size: 30px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px auto;
    width: 90%;

    h2 {
      font-size: 20px;
    }
  }
`;
