import s from './ProfileInfo.module.css';
import avatar from '../../../img/img_avatar.png';
import Preloader from "../../common/preloader/preloader";
import FollowUserButtonContainer from "./FollowUserButton/FollowUserButtonContainer";
import StatusContainer from "./Status/StatusContainer";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <>
            <div className={props.id === props.profile.userId ? s.flex_myprofile_info : s.flex_profile_info}>
                <div><img className={props.profile.userId === props.id ? s.my_profile_photo : s.profile_photo}
                          src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt=''/></div>
                <div className={s.text_info}>
                    <div className={s.username}>{props.profile.fullName}</div>
                    <StatusContainer status={props.status} myId={props.id} userId={props.profile.userId}/>
                    <div className={s.job}><b>Job:</b>
                        <div>{props.profile.lookingForAJob}</div>
                        <div>{props.profile.lookingForAJobDescription}</div>
                    </div>
                </div>
            </div>
            {props.profile.userId !== props.id ?
                <FollowUserButtonContainer/>
                :
                <></>
            }
        </>
    );
}


export default ProfileInfo;