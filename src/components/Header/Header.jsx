import React from 'react';
import h from './Header.module.css';
import homer from '../../img/homer.jpg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src={homer} alt=""></img>
      <div className={h.login}>
        {props.isAuth ? 
        <div>  {props.login} <br></br> <button onClick={props.logOut}>logout</button> </div>
        : <NavLink to={'/login'}>LOGIN</NavLink> }
      </div>
    </header>
  );

}

export default Header;