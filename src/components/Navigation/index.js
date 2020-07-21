import React from 'react';
import SocialFollow from '../SocialFollow';
import { NavLink } from 'react-router-dom';
import Header from '../Header'

import './index.css';

const Navigation = () => {
   return (

      <>
         <Header />
         <div className="nav">
            <NavLink to="/" className="nav-link" activeClassName="nav-link-active">Home</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
            <NavLink to="/contact-us" className="nav-link" activeClassName="nav-link-active">Contact Us</NavLink>
         </div>
         <SocialFollow />
      </>
   );
}

export default Navigation;