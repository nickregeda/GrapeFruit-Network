import preloaderImg from '../../../img/loading.gif';
import React from 'react';
import s from './preloader.module.css'

const Preloader = () => {
    return (
        < img className={s.preloaderImg} src={preloaderImg}/>
    );
}

export default Preloader;