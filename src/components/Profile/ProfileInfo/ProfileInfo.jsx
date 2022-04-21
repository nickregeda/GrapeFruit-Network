import s from './ProfileInfo.module.css';
import avatar from '../../../img/img_avatar.png';
import Preloader from "../../common/preloader/preloader";
import Status from "./Status/Status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    let toggleFollowUser = () => {
        if (props.friends.some(f => f.id === props.profile.userId && f.followed) ||
            props.users.some(u => u.id === props.profile.userId && u.followed)/* ||
            props.navbarFriends.some(nf => nf.id === props.profile.userId && nf.followed)*/
        ) {
            props.unfollow(props.profile.userId)
        } else {
            props.follow(props.profile.userId)
        }
    }
    return (
        <>
            <div className={props.id === props.profile.userId ? s.flex_myprofile_info : s.flex_profile_info}>
                <div><img className={props.profile.userId === props.id ? s.my_profile_photo : s.profile_photo}
                          src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt=''/></div>
                <div className={s.text_info}>
                    <div className={s.username}>{props.profile.fullName}</div>
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
            {props.profile.userId !== props.id ?
                <button
                    disabled={props.followingInProgress.some(id => id === props.profile.userId)}
                    className={s.toggleFollowProsileButton}
                    onClick={toggleFollowUser}>
                    {props.friends.some(f => f.id === props.profile.userId && f.followed) ||
                    props.users.some(u => u.id === props.profile.userId && u.followed)/* ||
                    props.navbarFriends.some(nf => nf.id === props.profile.userId && nf.followed)*/ ? 'Unfollow' : 'Follow'}</button>
                :
                <></>
            }
        </>
    );
}


export default ProfileInfo;