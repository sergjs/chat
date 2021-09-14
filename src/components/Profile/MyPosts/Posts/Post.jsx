import React from 'react';
import f from './Post.module.css';

const Post = (props) => {

    return (
        <div className={f.item}>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"></img>
            <div className= {f.post_text}> {props.message} </div>
            <button className={f.like_buuttom} >like {props.like} </button>
        </div>
    );
}

export default Post;