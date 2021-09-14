let initialState = {
    dialogsData: [
        { id: 1, name: 'Andrey', ava: 'https://cspromogame.ru//storage/upload_images/avatars/3975.jpg' },
        { id: 2, name: 'Natasha', ava: 'https://cspromogame.ru//storage/upload_images/avatars/921.jpg' },
        { id: 3, name: 'Misha', ava: 'https://cspromogame.ru//storage/upload_images/avatars/3836.jpg' },
        { id: 4, name: 'Vovay' },
        { id: 5, name: 'Kostyan' }
    ],
    messageDialogs: [
        { id: 1, message: 'Hi', vr: 'im' },
        { id: 2, message: 'Hello, how are you', vr: 'friend' },
        { id: 3, message: 'Ou, I am fine, when we meet', vr: 'im' },
        { id: 4, message: 'Ou meet', vr: 'im' },
        { id: 5, message: 'Ok, i agree', vr: 'friend' },
    ],
};

const dialogsPageReducer = (state = initialState, action) => {

    if (action.type === 'ADD-MESSAGE') {
        let newMes = {
            id: 6,
            message: action.newDialogsText
        };
        let stateCopy = { ...state };
        stateCopy.messageDialogs = [ ...state.messageDialogs ];
        stateCopy.messageDialogs.push(newMes);
        stateCopy.newDialogsText = '';
        return stateCopy;
    } 
    return state;
}

export const addMessageActionCreator = (newDialogsText) => {
    return { type: 'ADD-MESSAGE', newDialogsText }
}


export default dialogsPageReducer;