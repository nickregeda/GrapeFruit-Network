import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {
            id: 1, message: 'It\'s my first post! Hello!',
            date: "02.02.2022",
            likesCount: 24
        },
        {
            id: 2, message: "Hey! I wrote my second post!",
            date: "03.02.2022",
            likesCount: 15
        },
        {
            id: 3, message: 'It\'s my NEW POST!!! WHAT\'S UP!?!',
            date: "04.02.2022",
            likesCount: 16
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam amet aspernatur dolore dolorem, doloribus ea inventore iure magni nam obcaecati odio, odit, provident quia quo rem similique tempore.",
            date: "05.02.2022",
            likesCount: 11
        },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.message,
                date: "01.01.2001",
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export default profileReducer;

//actionCreaters
export const addPost = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

//thunkCreaters
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(
            data => {
                dispatch(setUserProfile(data));
            });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(
            response => {
                dispatch(setUserStatus(response.data))
            }
        )
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(
            response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            }
        )
    }
}
