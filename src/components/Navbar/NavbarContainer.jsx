import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {getFriends, getNavbarFriends, getUsers} from "../../redux/usersReducer";

class NavbarContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Navbar {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(NavbarContainer);