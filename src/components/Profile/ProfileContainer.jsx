import React from "react";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, getStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        if (!this.props.params.userId) {
            return <Navigate to='/myprofile'/>
            //для проверки убрать withAuthRedirect в MyProfileContainer
        }
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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