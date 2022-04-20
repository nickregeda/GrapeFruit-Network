import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {logInUser} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import MyProfileContainer from "../Profile/MyProfileContainer";
import Navbar from "../Navbar/Navbar";

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
        if (!this.props.isAuth) {
            return <Login logInUser={this.props.logInUser}/>
        } else {
            // return <Navigate to='/myprofile'/>
            return <MyProfileContainer/>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {logInUser})(LoginContainer)