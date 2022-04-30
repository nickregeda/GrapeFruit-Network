import React from "react";
import Subscriptions from "./Subscriptions";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getFriends,
    setCurrentFriendsPage,
} from "../../redux/usersReducer";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {toggleIsNavSubsHide} from "../../redux/navbarReducer";

class SubscriptionsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.pageSize, this.props.currentFriendsPage);
        this.props.toggleIsNavSubsHide(true);
    }

    onPageChange = (num) => {
        this.props.setCurrentFriendsPage(num);
        this.props.getFriends(this.props.pageSize, num);
    }

    componentWillUnmount() {
        this.props.toggleIsNavSubsHide(false);
    }

    render() {
        return (
            <Subscriptions {...this.props} onPageChange={this.onPageChange} follow={this.props.follow}
                           unfollow={this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        totalFriendsCount: state.usersPage.totalFriendsCount,
        pageSize: state.usersPage.pageSize,
        currentFriendsPage: state.usersPage.currentFriendsPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {getFriends, setCurrentFriendsPage, follow, unfollow, toggleIsNavSubsHide}),
    withAuthRedirect
)(SubscriptionsContainer);