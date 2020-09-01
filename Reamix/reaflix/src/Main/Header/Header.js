import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.jpg'
import searchIcon from '../../assets/icons/search.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="Reamix" />
      <div className="Search">
        <input type="text" name="pesquisar" />
        <img src={searchIcon} alt="pesquisar"/>
      </div>

    </div>
  );
}

export default App; 
