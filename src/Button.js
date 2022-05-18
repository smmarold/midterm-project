import React, { useContext } from 'react';
import './App.css';
import { ThemeContext, themes } from './context/ThemeContext';

const Button = (props) => {
  const {theme} = useContext(ThemeContext)
  const buttonClass = theme === themes.dark ? "button" : "button-dark";

    return (
      <div className={{buttonClass}} onClick={()=>props.onHandleClick()}>
        {props.children}
      </div>
    )
}


export default Button;