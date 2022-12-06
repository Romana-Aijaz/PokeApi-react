import './App.css';
import Home from './pages/Home';
import PokeInfo from './pages/PokeInfo';
import Favourites from './pages/Favourites';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={ <Home/> }></Route>
      <Route path="/favourites" element={ <Favourites/> }></Route>
      <Route path="/pokeInfo" element={ <PokeInfo/> }></Route>
      </Routes>
  </Router>
  );
}

export default App;
