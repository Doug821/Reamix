import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Main/Header/Header';
import Banner from './Main/Banner/Banner';
import Card from './Main/Card/Card';
import Categories from './Main/Categories/Categories';
import Podshows from './Main/Podshows/Podshows';
import Footer from './Main/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Card/>
    <Categories/>
    <Podshows/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
