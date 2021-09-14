import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, currentPageClick, getUsersThunkCreator } from '../../redux/userPageReducer';
import Users from './Users';
import preloader from '../../img/loading.gif';
import us from './Users.module.css';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { getCurrentPage, getFollowProgress, getIsFetching, getPageSize, getTottalUser, getUsers } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

    }


    newPageChanged = (pageNumber) => {
        this.props.currentPageClick(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }
    render() { 
        return <>
            { this.props.isFetching ? <img src={preloader} className={us.image}/> : null }
            <Users newPageChanged={this.newPageChanged}
                currentPage={this.props.currentPage}
                tottalUser={this.props.tottalUser}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followProgress={ this.props.followProgress}
            />
        </>
    }
}

let mapStateToPropse = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        tottalUser: getTottalUser(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followProgress: getFollowProgress(state)
    }
}
export default compose(
    connect(mapStateToPropse, 
    {follow, unfollow, currentPageClick, getUsersThunkCreator }))
    (UsersContainer)
