import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logInUser} from "../../redux/authReducer";

class LoginContainer extends React.Component {
    render() {
        return (
            <Login logInUser={this.props.logInUser}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {logInUser})(LoginContainer)