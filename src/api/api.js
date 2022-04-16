import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "af43d8a6-0709-48fb-8a6d-d8b345508d59"
    },
});

export const usersAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
    logInUser(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logOutUser() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(
            response => {
                return response.data;
            });
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}) //документация требует отправлять на серва объект со свойством status
    },
    // updatePhoto(photoURL) {
    //     return instance.put(`profile/photo`, {image: photoURL})
    // }
}

