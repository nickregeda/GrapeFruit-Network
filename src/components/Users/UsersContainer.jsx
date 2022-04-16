import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentPage,
    toggleIsFetching, toggleFollowingProgress, getUsers, follow, unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber);
    }


    render = () => {
        return (
            <Users onPageChange={this.onPageChange}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            //actionCreaters
            setCurrentPage,
            toggleIsFetching,
            //thunkCreaters
            getUsers,
            follow,
            unfollow,
        }
    ),
)(UsersContainer)
