import React from "react";
import SubscriptionsPage from "./SubscriptionsPage";
import {connect} from "react-redux";
import {follow, unfollow, getFriends, setCurrentPage} from "../../redux/usersReducer";

class SubscriptionsPageContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = (num) => {
        this.props.setCurrentPage(num);
        this.props.getFriends(this.props.pageSize, num);
    }

    render() {
        return (
            <SubscriptionsPage {...this.props} onPageChange={this.onPageChange} follow={this.props.follow}
                               unfollow={this.props.unfollow}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        totalFriendsCount: state.usersPage.totalFriendsCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {getFriends, setCurrentPage, follow, unfollow})(SubscriptionsPageContainer);