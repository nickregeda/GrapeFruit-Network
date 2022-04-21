import s from "../ProfileInfo.module.css";

const FollowUserButton = (props) => {
    let toggleFollowUser = () => {
        if (props.friends.some(f => f.id === props.id && f.followed) ||
            props.users.some(u => u.id === props.id && u.followed)) {
            props.unfollow(props.id)
        } else {
            props.follow(props.id)
        }
    }
    if (!props.isAuth) {
        return <div className={s.space_instead_button}></div>
    }
    return (
        <button
            disabled={props.followingInProgress.some(id => id === props.id)}
            className={s.toggleFollowProsileButton}
            onClick={toggleFollowUser}>
            {props.friends.some(f => f.id === props.id && f.followed) ||
            props.users.some(u => u.id === props.id && u.followed) ? 'Unfollow' : 'Follow'}</button>
    );
}

export default FollowUserButton;