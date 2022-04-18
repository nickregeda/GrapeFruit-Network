import avatar from "../../img/img_avatar.png";
import s from "../Users/Users.module.css";
import Pagination from "@mui/material/Pagination";
import Preloader from "../common/preloader/preloader";
import React from "react";
import Subscriptions from "./Subscription/Subscriptions";

const SubscriptionsPage = (props) => {
    let friendsElements = props.friends.map(f => <Subscriptions key={f.id} id={f.id}
                                                                photoURL={f.photos.small != null ? f.photos.small : avatar}
                                                                followed={f.followed}
                                                                name={f.name}
                                                                followingInProgress={props.followingInProgress}
                                                                status={f.status}
                                                                unfollow={props.unfollow}
                                                                follow={props.follow}/>);


    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

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
                    {friendsElements}
                </div>
            }
        </div>
    );
}
export default SubscriptionsPage;