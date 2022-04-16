import React from "react";
import s from "./Users.module.css";
import User from "./User/User";
import avatar from "../../img/img_avatar.png";
import Pagination from '@mui/material/Pagination';
import Preloader from "../common/preloader/preloader";

const Users = (props) => {
    let usersElements = props.users.map(u => <User key={u.id} id={u.id}
                                                   toggleFollowingProgress={props.toggleFollowingProgress}
                                                   photoURL={u.photos.small != null ? u.photos.small : avatar}
                                                   followed={u.followed}
                                                   name={u.name}
                                                   followingInProgress={props.followingInProgress}
                                                   status={u.status}
                                                   unfollow={props.unfollow}
                                                   follow={props.follow}/*location={u.location}*//>);

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    return (
        <div className={s.container}>
            <div className={s.pageNumbers}>
                <Pagination count={pagesCount}
                            page={props.currentPage}
                            onChange={(_, num) => {
                                props.onPageChange(num)
                            }}
                            variant="outlined" shape="rounded"
                />
            </div>
            {props.isFetching ? <Preloader/> :
                <div>
                    {usersElements}
                </div>
            }
        </div>
    );
}

export default Users;