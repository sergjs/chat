import React from 'react';
import D from './../Dialogs.module.css';

const Message = (props) => {
    {let newVr = props.vr}
    return (
        <div className={D.vr}>
            <div className={D.message} >{props.message}</div>
        </div>
    );
}

export default Message;
