import s from '../../Users/Users.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Subscription = (props) => {
    let toggleFollowUser = () => {
        if (props.followed) {
            props.unfollow(props.id);
        } else {
            props.follow(props.id);
        }
    }

    return (
        <div className={s.userList}>
            <div className={s.userPhoto}>
                <div>
                    <NavLink to={`/profile/${props.id}`}> <img src={props.photoURL} alt=""/> </NavLink>
                </div>
                <div>
                    <button className={s.followButton}
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={toggleFollowUser}>{props.followed ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.name_status_info}>
                    <div>{props.name}</div>
                    <div className={s.status}>"{props.status}"</div>
                </div>
                <div className={s.location_info}>
                    <div>{"props.location.country"}</div>
                    <div>{"props.location.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;