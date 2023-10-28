import React from 'react'
import './App.css';

import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>  
       <Route exact path='/' component={HomePage}/>  
       <Route exact path='/hats' component={ShopPage}/>
    </div>
  );
}

export default App;
