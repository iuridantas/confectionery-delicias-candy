import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to bottom, #f2737a, #eebea3);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    max-width: 1440px;
  }

  img {
    width: 180px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .container-link {
    display: flex;
    position: relative;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 24px;
    border-radius: 8px;
    width: auto;
    padding: 10px;
    border: none;
  }

  .container-link span {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }

  .container-link:hover {
    color: #e36369;
    text-decoration: underline;
  }

  .submenu-open {
    display: block;
    position: absolute;
    font-size: 24px;
    width: auto;
    cursor: pointer;
    color: #ffffff;
    border-radius: 8px;
    background: linear-gradient(to bottom, #efa193, #eebea3);
    padding: 10px;
  }

  .submenu-open a {
    display: block;
    padding: 5px 0;
    color: #ffffff;
    text-decoration: none;
  }

  .submenu-open a:hover {
    color: #e36369;
    text-decoration: underline;
  }

  .submenu-closed {
    display: none;
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    div {
      padding: 32px 16px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      width: 100%;
      top: 211px;
      background: linear-gradient(to bottom, #eebea3, #f2737a);
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 211px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      font-size: 23px;
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 32px;
      background: none;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }

    .submenu-open {
      width: 100%;
      background: linear-gradient(to bottom, #efa193, #eebea3);
      padding: 0 20px;
      top: 190px;
    }

    .submenu-open a {
      display: block;
      padding: 5px 10px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    .submenu-open a {
      display: block;

    }
  }
`;
