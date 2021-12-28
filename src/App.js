import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import {originals, action, ComedyMovies, HorrorMovies, RomanceMovies} from './urls'

import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";
function App() {
  return (
    <div className="App"> 
    
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={ComedyMovies} title='Comedy' isSmall />
      <Rowpost url={HorrorMovies} title='Horror' isSmall />
      <Rowpost url={RomanceMovies} title='Romance' isSmall />
      
    </div>
  );
}

export default App;
