const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: "Nick"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Irina"},
        {id: 4, name: "Yuriy"},
        {id: 5, name: "Pavel"},
        {id: 6, name: "Max"},
        {id: 7, name: "Ilon"},
        {id: 8, name: "Dima"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What's new?"},
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            };
            return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newMessage,
            }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageText = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;