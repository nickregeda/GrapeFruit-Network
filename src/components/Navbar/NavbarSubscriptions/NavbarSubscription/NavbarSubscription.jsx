import s from './NavbarSubscription.module.css';
import avatar from '../../../../img/img_avatar.png';
import {NavLink} from "react-router-dom";

const NavbarSubscription = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`/profile/${props.id}`}><img src={!props.photo ? avatar : props.photo} alt=""/>
                <div>{props.name}</div>
            </NavLink>
        </div>

    );
}

export default NavbarSubscription;
