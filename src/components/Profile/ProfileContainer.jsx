import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 22740/*this.props.id*/
            // <Navigate to='/myprofile'/>
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id,
    }
}

export const withRouter = (WrappedComponent/*: typeof React.Component*/) => {
    return (props/*: object*/) => {
        const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.
        return (
            <WrappedComponent {...props} params={params}/>
        );
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus}),
    withRouter
)(ProfileContainer);