import s from './Navbar.module.css';
import MyFriendsContainer from "./NavbarSubscriptions/NavbarSubscriptionsContainer";
import Menu from "./Menu/Menu";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.sticky_div}>
                <Menu/>
                <MyFriendsContainer/>
            </div>
        </nav>
    );
}

export default Navbar;
