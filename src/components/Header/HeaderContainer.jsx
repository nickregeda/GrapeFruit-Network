import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logOutUser} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render = () => {
        return (
            <Header {...this.props} logInUser={this.props.logOutUser}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.auth.profile,
    }
}

export default connect(mapStateToProps, {getAuth, logOutUser})(HeaderContainer)