import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getNavbarFriends} from "../../redux/usersReducer";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        let myId = this.props.id;
        // if (this.props.id === null) {
        //     myId = 22740;
        // }
        // Если сразу по ссылке перейти на myprofile, то id будет null и будет вечный прелоадер
        // (ошибка сервера 400).
        // Вероятно, не успевают прийти данные из пропсов (this.props.id из authReducer) перед загрузкой компоненты или типа того.
        // Возможно, авторизация происходит позже, чем отрисовка компоненты.
        // Так что прийдется заново ее отрисовывать (перейти на другой пункт меню и вернуться к Profile), чтобы данные отобразились.
        // Поэтому использую не id из props, а хардкод значение своего id.
        this.props.getProfile(myId);
        this.props.getStatus(myId);
    }

    render() {
        return (
            <Profile {...this.props}
                     updateStatus={this.props.updateStatus}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        users: state.usersPage.users,
        friends: state.usersPage.friends,
        navbarFriends: state.usersPage.navbarFriends,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, updateStatus, getStatus}),
    withAuthRedirect
)
(MyProfileContainer);