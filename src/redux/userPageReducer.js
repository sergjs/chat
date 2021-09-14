import { getFollow, getUnFollow, getUsers } from "../API/api";
import { updateObjectInArray } from "../utils/helpers";

let initialState = {
    users: [],
    pageSize: 3,
    tottalUser: 0,
    currentPage: 1,
    isFetching: true,
    followProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: updateObjectInArray( state.users, 'id', action.userid, {followed: true})
                // state.users.map(u => {    //в этой строке проходимся по users мапам где приходит юзер а дальше выполнеяем условия по фоловеру                    
                //     if (u.id === action.userid) {
                //         return { ...u, followed: true };
                //     }
                //     return u;
                // })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: updateObjectInArray( state.users, 'id', action.userid, {followed: false})
            }
        }
        case 'SETUSERS': {
            return { ...state, users: [...action.users] }
        }
        case 'CURRENT_PAGE_CLICK': {
            return { ...state, currentPage: action.currentPage }
        }
        case 'TOTAL_USER': {
            return { ...state, tottalUser: action.tottalUser }
        }
        case 'CHANGE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'FOLLOW_PROPGRESS': {
            return {
                ...state,
                followProgress: action.isFetching
                    ? [...state.followProgress, action.userid]
                    : state.followProgress.filter(id => id !== action.userid)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userid) => ({ type: 'FOLLOW', userid });
export const unfollowSuccess = (userid) => ({ type: 'UNFOLLOW', userid });
export const setusers = (users) => ({ type: 'SETUSERS', users });
export const currentPageClick = (currentPage) => ({ type: 'CURRENT_PAGE_CLICK', currentPage });
export const setTottalUsers = (tottalUser) => ({ type: 'TOTAL_USER', tottalUser });
export const changeIsFetching = (isFetching) => ({ type: 'CHANGE_IS_FETCHING', isFetching });
export const followProgressAC = (isFetching, userid) => ({ type: 'FOLLOW_PROPGRESS', isFetching, userid });

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(changeIsFetching(true));

        let data = await getUsers(currentPage, pageSize);
        dispatch(setusers(data.items));
        dispatch(setTottalUsers(data.totalCount));
        dispatch(changeIsFetching(false));
    }

}
const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(followProgressAC(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(followProgressAC(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, getFollow.bind(getUnFollow), followSuccess);
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollow(dispatch, userId, getUnFollow.bind(getFollow), unfollowSuccess);
    }
}
export default usersPageReducer;
