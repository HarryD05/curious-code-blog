import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Images
import LightLogo from '../assets/Light Logo.png';
import SmallLightLogo from '../assets/Small Light Logo.png';
import DarkLogo from '../assets/Dark Logo.png';
import SmallDarkLogo from '../assets/Small Dark Logo.png';

const Navbar = () => {
  const [isMin, setIsMin] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('dark') === 'true' ? true : false);

  const threshold = 425;

  useEffect(() => {
    const width = window.visualViewport.width;

    setIsMin((width < threshold));
    localStorage.setItem('min', isMin);

    setIsDark(localStorage.getItem('dark') === 'true' ? true : false);

  }, [isMin]);

  const renderLogo = () => {
    let image = null;
    console.log({ isDark, isMin })
    if (isMin === true) {
      if (isDark === true) {
        image = SmallDarkLogo;
      } else {
        image = SmallLightLogo;
      }
    } else if (isMin === false) {
      if (isDark === true) {
        image = DarkLogo;
      } else {
        image = LightLogo;
      }
    }

    return (
      <div id='brand'>
        <Link to='/'>
          <div id='brand-section'><img src={image} alt='brain logo' /></div>
        </Link>
      </div>
    )
  }

  const toggleTheme = () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('dark', false);
      setIsDark(false);
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('dark', true);
      setIsDark(true);
    }
  }

  const onResize = () => {
    const width = window.visualViewport.width;

    setIsMin((width < threshold))
    localStorage.setItem('min', isMin);
  }

  window.onresize = onResize;

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {renderLogo()}
        <div id='links'>
          <Link to='/posts' className='link'>
            Posts
          </Link>
          <Link to='/contacts' className='link' id='contacts-link'>
            Contacts
          </Link>
          <button id='toggle-switch' className='link' onClick={toggleTheme}>Toggle</button>
        </div>
      </div>
    </nav>
  )

}

export default Navbar;