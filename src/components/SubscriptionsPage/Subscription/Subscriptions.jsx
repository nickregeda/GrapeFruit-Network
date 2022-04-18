import s from '../../Users/Users.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Subscriptions = (props) => {
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
                <div>
                    <div>{props.name}</div>
                    <div>"{props.status}"</div>
                </div>
                <div>
                    <div>{"props.location.country"}</div>
                    <div>{"props.location.city"}</div>
                </div>
            </div>
        </div>
    );
}

export default Subscriptions;