import s from './Friend.module.css';
// import {useDebugValue} from "react";
import avatar from '../../../../img/img_avatar.png';

const Friend = (props) => {

    return (
        <div className={s.item}>
            <img src={avatar} alt=""/>
            <div>{props.name}</div>
        </div>

    );
}

export default Friend;
