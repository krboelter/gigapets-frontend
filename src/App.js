import React from 'react';
import './styles.css'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
		<Navigation />

		<Route exact path='/' component={Home} />
		<Route exact path='/login' component={Login}/>
    </div>
  );
}

export default App;
