import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MarketPage from 'pages/MarketPage';
import ChartPage from 'pages/ChartPage';
import AssetPage from 'pages/AssetPage';
import PersonalPage from 'pages/PersonalPage';

import { GlobalStyle } from 'helpers/styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
       <Route component={HomePage} path='/' exact />
       <Route component={MarketPage} path='/market' exact />
       <Route component={ChartPage} path='/chart/@:coin' exact />
       <Route component={AssetPage} path='/asset' exact />
       <Route component={PersonalPage} path='/personal' exact />
    </>
  );
}

export default App;