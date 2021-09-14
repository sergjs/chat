import React from 'react';
import { Redirect } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import f from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    
    return (
        <div className={f.content}> 
            <ProfileInfo userProfile={props.userProfile} status={props.status}
            updateStatus = {props.updateStatus} />
            <div className={f.posts}>
                <MyPostsContainer  />
            </div>
        </div>
    );
}

export default Profile;