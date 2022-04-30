import React from "react";
import Profile from "../Profile/Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {Navigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = this.props.id;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.params.userId !== this.props.params.userId) {
            this.componentDidMount();
            //для перехода по страницам подписок с NavbarSubscriptions
        }
        if (prevProps.id !== this.props.id) {
            this.componentDidMount();
            //для ререндеринга компоненты, в случае, если при загрузке компоненты не успел прийти id из auth
        }
    }

    render() {
        if (!this.props.isAuth && !this.props.params.userId) {
            return <Navigate to='/login'/>
        } else {
            return (
                <Profile {...this.props}/>
            );
        }
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
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
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);