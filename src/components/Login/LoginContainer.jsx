import React, {useEffect} from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logInUser} from "../../redux/authReducer";

class LoginContainer extends React.Component {
    render() {
        return <Login {...this.props} logInUser={this.props.logInUser}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
    }
}

export default connect(mapStateToProps, {logInUser})(LoginContainer)