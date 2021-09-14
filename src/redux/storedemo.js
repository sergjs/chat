import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
    _state: {
        profilePage: { 
            messageData: [
                {id: 1, message: 'Hi, how are you?', numder: 23},
                {id: 2, message: 'I am ok, It is my firest posts', numder: 3},
                {id: 3, message: 'karamba', numder: 23},
                {id: 4, message: 'blabla', numder: 4},
              ],
            newPostText: ['Bo1'],
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Andrey', ava: 'https://cspromogame.ru//storage/upload_images/avatars/3975.jpg' },
                {id: 2, name: 'Natasha', ava: 'https://cspromogame.ru//storage/upload_images/avatars/921.jpg'},
                {id: 3, name: 'Misha', ava: 'https://cspromogame.ru//storage/upload_images/avatars/3836.jpg'},
                {id: 4, name: 'Vovay'},
                {id: 5, name: 'Kostyan'}
            ],
            messageDialogs: [
                {id: 1, message: 'Hi', vr: 'im'},
                {id: 2, message: 'Hello, how are you', vr: 'friend'},
                {id: 3, message: 'Ou, I am fine, when we meet', vr: 'im'},
                {id: 4, message: 'Ou meet', vr: 'im'},
                {id: 5, message: 'Ok, i agree', vr: 'friend'},
            ],
            newDialogsText: ['первый текст'],
        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
    },
    subscribe (observer){
        this._rerenderEntireTree = observer;
    },
   dispatch(action) {

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

    this._rerenderEntireTree(this._state);

   }
}

export default store;