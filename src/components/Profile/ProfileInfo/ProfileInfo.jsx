import s from './ProfileInfo.module.css';
import avatar from '../../../img/img_avatar.png';
import Preloader from "../../common/preloader/preloader";
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div className={s.flex_profile_info}>
            <div><img className={props.profile.userId === props.id ? s.my_profile_photo : s.profile_photo}
                      src={props.profile.photos.large != null ? props.profile.photos.large : avatar}></img></div>
            <div className={s.text_info}>
                <div className={s.username_info}>{props.profile.fullName}</div>
                {props.profile.userId === props.id ?
                    <Status status={props.status} updateStatus={props.updateStatus}/>
                    :
                    <div className={s.status}>{props.status}</div>
                }
                <div className={s.job}><b>Job:</b>
                    <div>{props.profile.lookingForAJob}</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
}


export default ProfileInfo;