import React from 'react';
 
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import './App.css';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <Rowpost></Rowpost>
    </div>
  );
}

export default App;
