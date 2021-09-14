import React from 'react';
import { Field, reduxForm } from 'redux-form';
import  { maxLengthCreator, requiredField } from '../../../utils/validation';
import { TextArea } from '../../formcontrols/formcontrols';
import f from './MyPosts.module.css';
import Post from './Posts/Post';

let maxLength = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    placeholder='Enter your message'
                    name='newPostText' 
                    validate={[requiredField, maxLength]} />
                <button >Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'newPostPostForm' })(AddPostForm)

const MyPosts = React.memo(props => {
    let onAddPost = (values) => {
        props.AddPost(values.newPostText);
    }

    let postsElem = props.messageData.map(p => <Post message={p.message} like={p.numder} />);

    return (
        <div>
            <div>
                <a href=''> info</a> <br></br>
                <a href=''> contact</a> <br></br>
                <a href=''> menu</a>
            </div>
            <PostReduxForm onSubmit={onAddPost}/>
            <p>My posts</p>

            <div className={f.blog_posts} >
                {postsElem}
            </div>
        </div>
    );
});
 
export default MyPosts;