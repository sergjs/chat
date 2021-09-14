import React from 'react';
import D from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../formcontrols/formcontrols';
import { requiredField, maxLengthCreator } from '../../utils/validation';

let maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={D.new_massage}>
                <Field component={TextArea}
                    validate={[requiredField, maxLength10]}
                    name='newDialogsText'
                    placeholder='Enter your message' />
            </div>
            <div>
                <button >New message</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({form: 'newMessageForm'})(AddMessageForm)
const Dialogs = (props) => {

    let newMessageState = (values) => {
        props.AddMessage(values.newDialogsText);
    }
    let messagesElements = props.messageData.map(m => <Message message={m.message} vr={m.vr} />);
    let dialogsElements = props.messageDialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        ava={dialog.ava}
    />)
    return (
        <div>
            <div className={D.dialog}>
                <div className={D.left_coloumn}>
                    {dialogsElements}
                </div>
                <div className={D.mes}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={newMessageState} />
                </div>

            </div>
        </div>
    )
}

export default Dialogs;