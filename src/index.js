import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbars/navbar';
import Header from './components/headers/header';
import Main from './components/main/main';
import Footer from './components/Footer/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </React.StrictMode>
);

