import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
//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
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
        <nav clasName="navbar">
            <div className="navbar__container">
<NavLink exact to="/" className="fa-gen" id="navbar__logo">HOPEWELL</NavLink>
<ul className={click ? "navbar__menu active" : "navbar__menu" }>
<div className="nav-ico">
    <FaTimes ClassName='times' onClick={handleClick}/>
   </div>

    
    <li className="navbar__item">
    <NavLink exact to="/" onClick={handleClick} activeClassName="active" className="navbar__link">Home</NavLink>
    </li>
    <li className="navbar__item">
    <NavLink exact to="/about" onClick={handleClick} activeClassName="active" className="navbar__link">About</NavLink>
    </li>
    
    <li className="navbar__item">
    <NavLink exact to="/works" onClick={handleClick} activeClassName="active" className="navbar__link">Works</NavLink>
    </li>
    
    <li className="navbar__item">
    <NavLink exact to="/blog" onClick={handleClick} activeClassName="active" className="navbar__link">Blog</NavLink>
    </li>
    <li className="navbar__btn">
    <NavLink exact to="/contact" onClick={handleClick} activeClassName="active" className="button">CONTACT</NavLink>
    </li>
    
</ul>
 
<div className="nav-icon" onClick={handleClick}>
 {click ? ( <FaTimes className='bars'/> ): <FaBars className='bars'/> }
</div>
</div>

</nav>
                  
    )
}

export default Navbar;