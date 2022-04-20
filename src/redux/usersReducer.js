import {usersAPI} from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT';
const SET_NAVBAR_FRIENDS = 'SET_NAVBAR_FRIENDS';

const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';
const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';

let initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    friends: [],
    navbarFriends: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends,
            }
        case SET_NAVBAR_FRIENDS:
            return {
                ...state,
                navbarFriends: action.friends
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalCount,
            }
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: !u.followed}
                    } else {
                        return u;
                    }
                }),
                friends: state.friends.map(f => {
                    if (f.id === action.userID) {
                        return {...f, followed: !f.followed}
                        //удалить из массива (в памяти остаются данные из сервера, что были взяты при рендере компонеты, данные на сервере поменялись, но стейт еще не запросил измененные данные, поэтому стейт не изменился и компонента не рендерится заново )
                    } else {
                        return f;
                    }
                }),
            //     friends: state.friends.some(f => f.id === action.userID) ?
            //         state.friends.filter(f => f.id !== action.userID)
            //         :
            //         [...state.friends, state.users.find(u => u.id === action.userID)],
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id !== action.id),
            }
        default:
            return state;
    }
}
export default usersReducer;

//actionCreaters
export const setUsers = (users) => ({type: SET_USERS, users,});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page,});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount,});

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setNavbarFriends = (friends) => ({type: SET_NAVBAR_FRIENDS, friends});
export const setTotalFriendsCount = (totalCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalCount});

export const toggleFollowUser = (userID) => ({type: TOGGLE_FOLLOW, userID,});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching,});
export const toggleFollowingProgress = (id, isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, id, isFetching});

//thunkCreaters
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const getFriends = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getFriends(pageSize, currentPage).then(
            data => {
                dispatch(toggleIsFetching(false));
                dispatch(setFriends(data.items))
                dispatch(setTotalFriendsCount(data.totalCount))
            }
        )
    }
}
export const getNavbarFriends = () => {
    return (dispatch) => {
        usersAPI.getFriends(9, 1).then(
            data => {
                debugger
                dispatch(setNavbarFriends(data.items))
            }
        )
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId, true));
        usersAPI.unfollow(userId).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowUser(userId));
                }
                dispatch(toggleFollowingProgress(userId, false));
            });
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId, true));
        usersAPI.follow(userId).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowUser(userId));
                }
                dispatch(toggleFollowingProgress(userId, false));
            });
    }
}