import profilePageReducer, { addPostActionCreator, deletePost } from "./profilePageReducer";

let state = {
    messageData: [
        { id: 1, message: 'Hi, how are you?', numder: 23 },
        { id: 2, message: 'I am ok, It is my firest posts', numder: 3 },
        { id: 3, message: 'karamba', numder: 23 },
        { id: 4, message: 'blabla', numder: 4 },
    ]
};

it('length of opsts should be incrementednpm', () => {
    //1. тест дата
    let addPost = addPostActionCreator('Это новое сообщение которого раньше не было')

    //2. делаем action
    let newState = profilePageReducer(state, addPost);
    //3. Ожидание что в новом state дилан будет 5. Expectation
    expect(newState.messageData.length).toBe(5);
});

it('message of new post should be correct', () => {
    //1. тест дата
    let addPost = addPostActionCreator('Это новое сообщение которого раньше не было')
    //2. делаем action
    let newState = profilePageReducer(state, addPost);
    //3. Ожидание что в новом state дилан будет 5. Expectation
    expect(newState.messageData[4].message).toBe('Это новое сообщение которого раньше не было');
});

it('after deleting length of message shold be decrement', () => {
    //1. тест дата
    let action = deletePost(1)
    //2. делаем action
    let newState = profilePageReducer(state, action);
    //3. Ожидание что в новом state дилан будет 5. Expectation
    expect(newState.messageData.length).toBe(3);
});

it('after deleting length shouldn`t be decrement if id is incorrect', () => {
    //1. тест дата
    let action = deletePost(1000)
    //2. делаем action
    let newState = profilePageReducer(state, action);
    //3. Ожидание что в новом state дилан будет 5. Expectation
    expect(newState.messageData.length).toBe(4);
});