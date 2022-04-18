import React from "react";
import NavbarSubscriptions from "./NavbarSubscriptions";
import {connect} from "react-redux";
import {getFriends} from "../../../redux/usersReducer";

class NavbarSubscriptionsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render = () => {
        return (
            this.props.isAuth ?
                <NavbarSubscriptions {...this.props} />
                :
                <></>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getFriends})(NavbarSubscriptionsContainer);

