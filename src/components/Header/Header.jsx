import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../img/img_avatar.png';
import logoutPic from '../../img/logout_pic.png';
import Preloader from "../common/preloader/preloader";

const Header = (props) => {
    let onLogOut = () => {
        let choice = window.confirm("Are you shure?");
        if (choice) {
            props.logInUser();
        }
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
                                <div className={s.userLogin}>{props.login}</div>
                                <img className={s.logout_pic} onClick={onLogOut} src={logoutPic}/>
                            </div>
                        </>
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;