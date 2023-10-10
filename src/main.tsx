import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { AboutUs } from './page/aboutUs';
import { Contact } from './page/contact';
import { Home } from './page/home';
import { CustomCake } from './page/CustomCake';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/boloPersonalizado" element={<CustomCake />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
