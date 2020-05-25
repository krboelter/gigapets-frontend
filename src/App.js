import React from 'react';
import './styles.css'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
		<Navigation />

		<Route exact path='/' component={}/>
    </div>
  );
}

export default App;
