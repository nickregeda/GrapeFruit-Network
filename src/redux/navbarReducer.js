const ADD_SUBSCRIPTION = 'ADD-SUBSCRIPTION';

let initialState = {
    friends: [
        {
            id: 1,
            name: "Nick",
        },
        {
            id: 2,
            name: "Katya",
        },
        {
            id: 3,
            name: "Karina",
        },
        {
            id: 4,
            name: "Max",
        },
    ],
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_SUBSCRIPTION:
        //     return {
        //         ...state,
        //         friends: action.subscription,
        //     }
        default:
            return state;
    }
}

export default navbarReducer;

export const addNewSubscription = (subscription) => ({type: ADD_SUBSCRIPTION, subscription,});
