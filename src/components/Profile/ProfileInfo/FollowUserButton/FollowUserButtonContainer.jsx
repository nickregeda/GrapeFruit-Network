import {connect} from "react-redux";
import FollowUserButton from "./FollowUserButton";
import {follow, unfollow} from "../../../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        friends: state.usersPage.friends,
        followingInProgress: state.usersPage.followingInProgress,
        id: state.profilePage.profile.userId,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {follow, unfollow})(FollowUserButton);