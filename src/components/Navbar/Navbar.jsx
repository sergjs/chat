import React from 'react';
import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';

/*{`${n.item} ${n.active}`}*/
const Navbar = () => {
    return (
      <nav className= {n.nav}>
        <div > 
          <NavLink to='/Profile' className= {n.item} activeClassName = {n.active}> Profile </NavLink>
        </div>
        <div>
          <NavLink to='/users' className= {n.item} activeClassName = {n.active}>Users</NavLink>
        </div>
        <div> <NavLink to='/Dialogs' className={n.item}  activeClassName = {n.active}> Message </NavLink></div>
        <div> <NavLink to='/News' className={n.item}  activeClassName = {n.active}> News </NavLink></div>
        <div> <NavLink to='/Music' className={n.item}  activeClassName = {n.active}> Music </NavLink></div>
        <div> <NavLink to='/Settings' className={n.item}  activeClassName = {n.active}> Settings </NavLink></div>
      </nav>
    );

}

export default Navbar;