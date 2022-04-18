import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
	return (
		<div>
			<div className={s.bg_image}></div>
			<div className={s.wrapper}>
				<ProfileInfo profile={props.profile} status={props.status}/>
				<PostsContainer />
			</div>
		</div>
	);
}

export default Profile;