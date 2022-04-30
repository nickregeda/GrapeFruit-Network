import React from "react";
import {addPost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             dispatch(action);
//         },
//         addPost: () => {
//             let action = addPostActionCreator();
//             dispatch(action);
//         }
//     }
// }

const PostsContainer = connect(mapStateToProps, {addPost,})(Posts);

export default PostsContainer;