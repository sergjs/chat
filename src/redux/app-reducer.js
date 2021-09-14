import { getAuthLogin } from "./auth-reducer";

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INITISLIZED': {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}
export const initializedSuccess = () => ({
    type: 'SET_INITISLIZED'
})


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthLogin())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        });
}


export default appReducer;