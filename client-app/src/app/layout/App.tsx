import { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { HomePage } from '../../features/items/home/HomePage';
import NavBar from '../../features/items/navBar/NavBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
