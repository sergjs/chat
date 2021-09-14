import React from 'react';
import pf from './ProfileInfo.module.css';
import preloader from '../../../img/loading.gif';
import working from '../../../img/working.png';
import dontWorking from '../../../img/dontWorking.jpg';
import ProfileStatuseWithHooks from './ProfileStatuseWithHooks';

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return (
            <img src={preloader} ></img>
        )
    }
    return (
        <div>
            <div>
                <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
            </div>
            <div>
                <img src={props.userProfile.photos.large} alt="noo" />
            </div>
            <ProfileStatuseWithHooks status = {props.status} updateStatus = {props.updateStatus} />
            <div className={pf.about}>
                <h1>{props.userProfile.fullName}</h1>
                <div>Коротко обо мне: {props.userProfile.aboutMe}</div>
                <div>Мои контакты: {props.userProfile.contacts.instagram} </div>
            </div>
            <div>
                {props.userProfile.lookingForAJob ? <img src={working} alt="1" className={pf.foto} /> : <img src={dontWorking} alt="2" className={pf.foto} />}
            </div>
        </div>
    );
}

export default ProfileInfo;