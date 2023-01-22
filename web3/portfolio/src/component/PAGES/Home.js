import React from "react";
import { NavLink } from 'react-router-dom';
import pic1 from './pic1.svg';


export const Home = () => {
  
    return(
        
            <div className="main">
    <div className="main__container">
      <div className="main__content">
      <p>Hi, I'm Emeka.</p>
        <h1>WEB3 DEVELOPER</h1>
        <h2>Solidity and Dapps.</h2>
        <h3>see what makes me different.</h3>        
      <h4>  <NavLink exact to="/about"  className="main__btn">About
        </NavLink> </h4>
      </div>
      <div className="main__img--container">
        
        <img src={pic1} alt="pic1" className="main__img"/>
      </div>
    </div>
    <div>
      
    </div>
   
        </div>
    )
}