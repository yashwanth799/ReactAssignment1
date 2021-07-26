import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (

      <header>
         <ul>
         <Link to='/Home'>
             <li>
               Home
             </li>
           </Link>
           <Link to='/about'>
             <li>
               About
             </li>
           </Link>
           <Link to='/contact'>
             <li>
               Contact
             </li>
           </Link>
         </ul>
      </header>
   
    );
  }
  
  export default Header;