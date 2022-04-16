import s from './ProfileInfo.module.css';
import avatar from '../../../img/img_avatar.png';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div className={s.flex_profile_info}>
            <div><img className={s.profile_photo}
                      src={props.profile.photos.large != null ? props.profile.photos.large : avatar}></img></div>
            <div className={s.text_info}>
                <div className={s.username_info}>{props.profile.fullName}</div>
                <div className={s.status}><b>Status:</b> {props.status}</div>
                <div className={s.status}><b>Job:</b> {props.profile.lookingForAJobDescription}</div>
                {/*<div className={s.birthdate_info}>Date of birth: 05.12.2000</div>*/}
                {/*<div className={s.city_info}>City: Kyiv</div>*/}
                {/*<div className={s.education_info}>Education: KPI Sikorskiy</div>*/}
                {/*<div className={s.web_site_info}>Web: https://web-site.com</div>*/}
            </div>
        </div>
    );
}


export default ProfileInfo;