import s from './MyPost.module.css';
import avatar from '../../../../img/img_avatar.png';

const MyPost = (props) => {
	return (
		<div className={s.item}>
			<img className={s.profile_photo} src={avatar}></img>
			<div>
				<div>{props.message}</div>
				<div className={s.post_date}>{props.date}</div>
				<div className={s.post_likesCount}>{'👍' + ' ' + props.likesCount}</div>
			</div>
		</div>
	);
}

export default MyPost;