import React, { useEffect, useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import ItemDetails from '../../features/items/details/ItemDetails';

function App() {

  const [items, setItems] = useState([]);


  return (
    <div className="App">
      <ItemDetails />
    </div>
  );
}

export default App;
