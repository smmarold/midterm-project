import './App.css';
import React, {useContext} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const navigate = useNavigate();

  const navToHome = () => {
    navigate('home-page');
  };

  const navToProducts = () => {
    navigate('product-page');
  };

  return (
  <div style={({backgroundColor: theme.background, color: theme.forground})}>
   <div className='nav-bar' style={({backgroundColor: theme.backgroundNav, color: theme.forground})}>
     <button onClick={() => navToHome()} className="button">Home</button>
     <button onClick={() => navToProducts()} className="button">Products</button>
     <ToggleSwitch onToggle={toggleTheme}/>
   </div>
   <Outlet />
   </div>
  );
}

export default App;
