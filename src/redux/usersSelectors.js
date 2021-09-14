import { createSelector } from "reselect";

const getUserSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUserSelector, (users) => {
    return users.filter(u => true);
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTottalUser = (state) => {
    return state.usersPage.tottalUser;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowProgress = (state) => {
    return state.usersPage.followProgress;
}