import {connect} from "react-redux";
import Status from "./Status";
import {updateStatus} from "../../../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}

export default connect(mapStateToProps, {updateStatus})(Status)