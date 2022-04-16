import s from './MyProfile.module.css'
import MyProfileInfo from "./MyProfileInfo/MyProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const MyProfile = (props) => {
    return (
        <div>
            <div className={s.bg_image}></div>
            <div className={s.wrapper}>
                <MyProfileInfo profile={props.profile}
                               status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default MyProfile;