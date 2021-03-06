import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatuseWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect ( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
         setEditMode(true);
    }
    const deactivateEditMode = () => {
         setEditMode(false);
         props.updateStatus(status);
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode

                ? <div>
                    <span onClick={activateEditMode}>
                        {props.status || '----'}</span>
                </div>

                : <div><input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status} 
                    /> 
                    </div>
            }
        </div>

    )
}



export default ProfileStatuseWithHooks;