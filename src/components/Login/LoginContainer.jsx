import React, {useEffect} from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logInUser} from "../../redux/authReducer";
import {Navigate, useNavigate} from "react-router-dom";

class LoginContainer extends React.Component {
    // componentDidMount() {
    // }
    //
    // componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
    //     if (prevProps.isAuth !== this.props.isAuth) {
    //         this.componentDidMount();
    //     }
    // }

    render() {
        // if (!this.props.isAuth) {
        return <Login {...this.props} logInUser={this.props.logInUser}/>
        // }
        // else {
        //     return <Navigate to='/myprofile'/>
        // }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {logInUser})(LoginContainer)