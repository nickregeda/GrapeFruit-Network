import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleIsFetching, toggleFollowingProgress, getUsers, follow, unfollow, setCurrentUsersPage
} from '../../redux/usersReducer';
import Users from './Users';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentUsersPage);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentUsersPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
    }


    render = () => {
        return (
            <Users onPageChange={this.onPageChange}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   {...this.props}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentUsersPage: state.usersPage.currentUsersPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            //actionCreaters
            setCurrentUsersPage,
            //thunkCreaters
            getUsers,
            follow,
            unfollow,
        }
    ),
)(UsersContainer)
