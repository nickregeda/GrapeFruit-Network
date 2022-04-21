import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className={s.menuBlock}>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/myprofile'>Profile</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/dialogs'>Messages</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/users'>Users</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/news'>News</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/music'>Music</NavLink>
            <NavLink className={({ isActive }) => (isActive ? s.active_menu_item : s.menu_item)} to='/settings'>Settings</NavLink>
        </div>
    );
}

export default Menu;
