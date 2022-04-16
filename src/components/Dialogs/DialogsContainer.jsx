import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessage: () => {
//             let action = sendMessageActionCreator();
//             dispatch(action);
//         },
//         updateNewMessageText: (text) => {
//             let action = updateNewMessageTextActionCreator(text);
//             dispatch(action);
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText,}),
    withAuthRedirect
)
(Dialogs);