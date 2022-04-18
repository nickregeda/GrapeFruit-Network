import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../img/img_avatar.png';
import Preloader from "../common/preloader/preloader";

const Header = (props) => {
    let onLogOut = () => {
        props.logInUser();
    }

    if (!props.profile && props.isAuth === true) {
        return (
            <header className={s.header}>
                <Preloader/>
            </header>);
    }
    return (
        <header className={s.header}>
            {/* <a href='#s'><img className={s.logo_image} src='' ></img></a> */}
            <div className={s.network_header}>
                GrapeFruit ● Network
            </div>
            <div className={s.loginBlock}>
                {
                    props.isAuth ?
                        <>
                            <div className={s.userAuthBlock}>
                                <img className={s.userAuthPhoto}
                                     src={props.profile.photos.small != null ? props.profile.photos.small : avatar}
                                     alt=""/>
                                <div>{props.login}</div>
                            </div>
                            <button onClick={onLogOut}>log out</button>
                        </>
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;