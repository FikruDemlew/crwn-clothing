import React from 'react'
import './App.css';

import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';


const HatePage = () => {
  return <h1>Hats Page</h1>
}
function App() {
  return (
    <div>
      
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/hats' component={HatePage}/>
       
    </div>
  );
}

export default App;
