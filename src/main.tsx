import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Header } from './components/header';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
