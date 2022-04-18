import s from './Navbar.module.css';
import Menu from "./Menu/Menu";
import MyFriendsContainer from "./NavbarSubscriptions/NavbarSubscriptionsContainer";

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
