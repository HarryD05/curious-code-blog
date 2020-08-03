import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Images
import LightLogo from '../assets/Light Logo.png';
import SmallLightLogo from '../assets/Small Light Logo.png';
import DarkLogo from '../assets/Dark Logo.png';
import SmallDarkLogo from '../assets/Small Dark Logo.png';

//Context
import { ViewContext } from './../context/ViewContext';

const Navbar = () => {
  const viewContext = useContext(ViewContext);


  const renderLogo = () => {
    let image = null;

    const isMin = viewContext.getIsMin();
    const isDark = viewContext.getIsDark();

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
        <Link to='secret' className="secret">
          <div></div>
        </Link>
        <Link to='/'>
          <div id='brand-section'><img src={image} alt='brain logo' /></div>
        </Link>
      </div>
    )
  }

  const toggleTheme = () => {
    viewContext.setDark(!viewContext.getIsDark())
  }

  return (
    <nav className='navbar'>
      <div className='nav-container'>

        {renderLogo()}
        <div id='links'>
          <Link to='/all-posts' className='link'>
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