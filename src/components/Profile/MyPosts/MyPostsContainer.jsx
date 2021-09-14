
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts'

const mapStateToPropse = (state) => {
    return {
        messageData: state.profilePage.messageData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        AddPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
const MyPostsContainer = connect(mapStateToPropse, mapDispathToProps)(MyPosts);
export default MyPostsContainer;