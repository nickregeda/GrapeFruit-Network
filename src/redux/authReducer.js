import {authAPI, profileAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH_USER_PROFILE = 'SET-AUTH-USER-PROFILE';
const LOGOUT_USER = 'LOGOUT_USER';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    profile: null,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case LOGOUT_USER:
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false,
                profile: null,
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.url
            }
        default:
            return state;
    }
}

export default authReducer;

//actionCreaters
export const setAuthUserData = (data) => ({type: SET_USER_DATA, data,});
export const setAuthUserProfile = (profile) => ({type: SET_AUTH_USER_PROFILE, profile,});
export const logoutUser = () => ({type: LOGOUT_USER});
export const setCaptchaURL = (url) => ({type: SET_CAPTCHA_URL, url})

//thunkCreaters
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data));
                    profileAPI.getProfile(data.data.id).then(
                        data => {
                            dispatch(setAuthUserProfile(data));
                        })
                }
            })
    }
}
//getAuthMe - принимает с сервера в data {id, login, email}, одноименные поля мы создали в стейте. Принятыми данными инициализируются
//стейтовые данные (id, login, email). В setAuthUserData принимается тот самый обьект data.
//Дальше мы делаем запрос getProfile, чтобы получить доступ к данным профиля по полученному в getAuthMe id.
//На данный момент из profile нам надо photos.small.

export const getCaptcha = () => {
    return (dispatch) => {
        authAPI.getCaptcha().then(
            response => {
                // debugger
                dispatch(setCaptchaURL(response.data.url))
            }
        )
    }
}

export const logOutUser = () => {
    return (dispatch) => {
        authAPI.logOutUser().then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(logoutUser());
                } else {
                    alert('error')
                }
            }
        )
    }
}
export const logInUser = (email, password, rememberMe, setStatus, setSubmitting) => {
    return (dispatch) => {
        authAPI.logInUser(email, password, rememberMe).then(
            response => {
                if (response.data.resultCode === 0) {
                    setStatus("0") // флажок, чтобы при первом входе отображалась страница профиля (при перезагрузке navigate(-1))
                    dispatch(getAuth())
                } else if (response.data.resultCode === 10) {
                    setStatus(response.data.messages)
                    dispatch(getCaptcha())
                } else {
                    setStatus(response.data.messages)
                }
                setSubmitting(false);
            }
        )
    }
}
