const TOGGLE_IS_NAVBAR_SUBS_HIDE = 'TOGGLE_IS_NAVBAR_SUBS_HIDE';

let initialState = {
    isNavSubsHide: false,
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_NAVBAR_SUBS_HIDE:
            return {
                ...state,
                isNavSubsHide: action.isHide
            }
        default:
            return state;
    }
}

export default navbarReducer;

export const toggleIsNavSubsHide = (isHide) => ({type: TOGGLE_IS_NAVBAR_SUBS_HIDE, isHide});
