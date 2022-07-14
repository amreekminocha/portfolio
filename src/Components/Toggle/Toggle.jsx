import React, { useContext } from 'react'
import './Toggle.css';

import { themeContext } from '../../Context';

import {FiSun} from 'react-icons/fi';
import {FiMoon} from 'react-icons/fi';

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = ()=>{
        theme.dispatch({type:'toggle'});
    };

  return (
    <div className="toggle" onClick={handleClick}>
        <FiSun/>
        <FiMoon/>
        <div className="t-button" style={darkMode? {left:'2px'}:{right:'2px'}}>

        </div>
    </div>
  );
};

export default Toggle;