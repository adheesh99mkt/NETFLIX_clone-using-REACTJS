import React from 'react';
 
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import './App.css';
import Rowpost from './Components/Rowpost/Rowpost';
import { originals,actions ,comedy, horror, romance} from './urls';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Banner></Banner>
     <Rowpost url={originals} title={'Netflix Originals'}></Rowpost>
     <Rowpost url={actions} title={'Action'} isSmall></Rowpost>
     <Rowpost url={horror} title={'Horror'} isSmall></Rowpost>
     <Rowpost url={romance} title={'Romance'} isSmall></Rowpost>
     <Rowpost url={comedy} title={'Comedy'} isSmall></Rowpost>
    </div>
  );
}

export default App;
