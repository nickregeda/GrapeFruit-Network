import MyFriends from "./MyFriends";
import {connect} from "react-redux";
import {addNewSubscription} from "../../../redux/navbarReducer";
import axios from "axios";
import React from "react";

class MyFriendsContainer extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users`, {
        //     withCredentials: true,
        // }).then(
        //     response => {
        //         let friends = [];
        //         response.data.items.map(i => {
        //             if (i.followed) {
        //                 friends.push(i);
        //             }
        //         });
        //         this.props.addNewSubscription(friends);
        //     }
        // )
    }

    render = () => {
        return (
            this.props.isAuth ?
                <MyFriends {...this.props} />
                :
                <></>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {addNewSubscription})(MyFriendsContainer);

