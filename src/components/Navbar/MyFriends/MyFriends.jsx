import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {
    let friendsElements = props.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}/>);

    return (
        <div className={s.friendsBlock}>
            <h2>Subscriptions</h2>
            <div className={s.flexFriendsBlock}>
                {friendsElements}
            </div>
        </div>
    );
}

export default MyFriends;
