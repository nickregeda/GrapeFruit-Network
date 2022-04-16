import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let store = {
    _callSubscriber() {
        console.log("state was changed");
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aliquam amet aspernatur dolore dolorem, doloribus ea inventore iure magni nam obcaecati odio, odit, provident quia quo rem similique tempore.",
                    date: "05.02.2022",
                    likesCount: 11
                },
                {
                    id: 3, message: 'It\'s my NEW POST!!! WHAT\'S UP!?!',
                    date: "04.02.2022",
                    likesCount: 16
                },
                {
                    id: 2, message: "Hey! I wrote my second post!",
                    date: "03.02.2022",
                    likesCount: 15
                },
                {
                    id: 3, message: 'It\'s my first post! Hello!',
                    date: "02.02.2022",
                    likesCount: 24
                }
            ],
            newPostText: "New post"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Nick"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Irina"},
                {id: 4, name: "Yuriy"},
                {id: 5, name: "Pavel"},
                {id: 6, name: "Max "},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "What's new?"},
            ],
            newMessageText: "New message"
        },
        navBar: {
            friends: [
                {name: "Alex"},
                {name: "Irina"},
                {name: "Yuriy"},
                {name: "Pavel"},
                {name: "Max"},
                {name: "Dima"},
                {name: "Karina"}
            ]
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;