import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={s.menuBlock}>
            <NavLink to='/myprofile'>Profile</NavLink>
            <NavLink to='/dialogs'>Messages</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/music'>Music</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    );
}

export default Menu;
