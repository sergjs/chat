import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, profile, updateStatus } from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authrizedUsersId;
        }
        this.props.profile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status}
            updateStatus = {this.props.updateStatus }
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        authrizedUsersId: state.auth.id
    }
};

export default compose(connect(mapStateToProps, { profile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);