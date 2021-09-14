import { getProfile, profileAPI } from "../API/api";

let initialState = {
    messageData: [
        { id: 1, message: 'Hi, how are you?', numder: 23 },
        { id: 2, message: 'I am ok, It is my firest posts', numder: 3 },
        { id: 3, message: 'karamba', numder: 23 },
        { id: 4, message: 'blabla', numder: 4 },
    ],
    userProfile: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                number: 0
            };
            return {
                ...state,
                messageData: [...state.messageData, newPost],
                newPostText: ''
            };
        };
        case 'SET-USERS-PROFILE': {
            return { ...state, userProfile: action.userProfile }
        }
        case 'SET_STATUS': {
            return { ...state, status: action.status }
        }
        case 'DELETE_POST': {
            return { ...state, messageData: state.messageDatafilter(p => p.id != action.postId) }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText })
export const setUsersProfile = (userProfile) => ({ type: 'SET-USERS-PROFILE', userProfile })
export const setStatus = (status) => ({ type: 'SET_STATUS', status });
export const deletePost = (postId) => ({ type: 'DELETE_POST', postId });


export const profile = (userId) => async (dispatch) => {
    let data = await getProfile(userId);
        dispatch(setUsersProfile(data));
    }
 


export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}


export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profilePageReducer;