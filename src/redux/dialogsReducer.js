const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message})

export default dialogsReducer;