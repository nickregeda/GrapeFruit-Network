import React from "react";
import MyProfile from "./MyProfile";
import {connect} from "react-redux";
import {getProfile, getStatus, updatePhoto, updateStatus} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        let myId = /*this.props.id*/22740;
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
            <MyProfile profile={this.props.profile}
                       status={this.props.status}
                       updateStatus={this.props.updateStatus}
                // updatePhoto={this.props.updatePhoto}
                // photoURL={this.props.photoURL}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        // photoURL: state.profilePage.photoURL,
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, updateStatus, getStatus, /*updatePhoto*/}),
    withAuthRedirect
)
(MyProfileContainer);