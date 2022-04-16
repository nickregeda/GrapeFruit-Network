import s from './Navbar.module.css';
import Menu from "./Menu/Menu";
import MyFriendsContainer from "./MyFriends/MyFriendsContainer";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.sticky_div}>
                <Menu id={props.id} />
                <MyFriendsContainer/>
            </div>
        </nav>
    );
}

export default Navbar;
