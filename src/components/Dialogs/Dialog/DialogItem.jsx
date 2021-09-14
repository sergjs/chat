import React from 'react';
import { NavLink } from 'react-router-dom';
import D from './../Dialogs.module.css';


const DialogItem = (props) => {
    return (
    <div className={D.item}> 
        <div >
            <img className={D.picter} src={props.ava} alt="none"  /> 
        </div>
        <div>
            <NavLink className={D.link} to={'/dialogs/'+props.id}>{props.name}</NavLink>    
        </div>
    </div>
    );
}



export default DialogItem;
