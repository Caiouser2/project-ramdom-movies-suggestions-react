import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Informations from './pages/Informations/ImportantsInformations';
import Policy from './pages/Policy/PrivacyPolicy';
import HowUse from './pages/HowUseSite/Instruction';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/como-usar-site" element={<HowUse/>}/>
            <Route path="/informacoes-importantes" element={<Informations/>}/>
            <Route path="/politica-de-privacidade" element={<Policy/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
