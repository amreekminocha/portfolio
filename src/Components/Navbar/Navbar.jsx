import React,{useContext} from 'react'
import Toggle from '../Toggle/Toggle';

import { themeContext } from '../../Context';

import {Link} from 'react-scroll';

import './Navbar.css';

function Navbar() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='n-wrapper' id='Navbar'>
        <div className="n-left">
            <div className="n-name">Amreek</div>
            <span className='n-toggle'><Toggle/></span>
        </div>
        <div className="n-right">
            <div className="n-list">
              <ul>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                  <li style={{color:darkMode? 'white':'black'}}>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                  <li style={{color:darkMode? 'white':'black'}}>Services</li>
                </Link>
                <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                  <li style={{color:darkMode? 'white':'black'}}>Experience</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                  <li style={{color:darkMode? 'white':'black'}}>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'>
                  <li style={{color:darkMode? 'white':'black'}}>Testimonials</li>
                </Link>
              </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
              <button className="button n-button">
                Contact
              </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar