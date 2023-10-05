import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { AboutUs } from './page/aboutUs';
import { Contact } from './page/contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
