import s from './NavbarSubscriptions.module.css';
import NavbarSubscription from "./NavbarSubscription/NavbarSubscription";
import {NavLink} from "react-router-dom";

const NavbarSubscriptions = (props) => {
    // debugger
    let friendsElements = props.friends.map(friend => <NavbarSubscription key={friend.id} id={friend.id} name={friend.name}
                                                                          photo={friend.photos.small}/>);

    return (
        <div className={s.friendsBlock}>
            <NavLink className={s.subscriptionTitle} to='/myfriends'>Subscriptions</NavLink>
            <div className={s.flexFriendsBlock}>
                {friendsElements}
            </div>
        </div>
    );
}

export default NavbarSubscriptions;
