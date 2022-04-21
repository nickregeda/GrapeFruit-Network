import React from "react";
import NavbarSubscriptions from "./NavbarSubscriptions";
import {connect} from "react-redux";
import {getFriends/*, getNavbarFriends*/} from "../../../redux/usersReducer";
import {compose} from "redux";

class NavbarSubscriptionsContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth) {
            // this.props.getNavbarFriends();
            this.props.getFriends();
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevProps.isAuth !== this.props.isAuth) {
            this.componentDidMount();
        }
    }

    render = () => {
        if (this.props.isAuth) {
            return <NavbarSubscriptions {...this.props}/>
        } else {
            return <></>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        isAuth: state.auth.isAuth,
        isNavSubsHide: state.navBar.isNavSubsHide
    }
}

export default compose(
    connect(mapStateToProps, {/*getNavbarFriends,*/ getFriends}),
)
(NavbarSubscriptionsContainer);

