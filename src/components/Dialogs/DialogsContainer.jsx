import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/dialogsPageReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToPropse = (state) => {
    return {
        messageData: state.dialogsPage.messageDialogs,
        messageDialogs: state.dialogsPage.dialogsData,
        newDialogsText: state.dialogsPage.newDialogsText,
    }
}
    let mapDispathToProps = (dispatch) => {debugger
        return {      
            AddMessage: (newDialogsText) => {
                dispatch(addMessageActionCreator(newDialogsText));
            }
        }
    }
export default compose(
    connect(mapStateToPropse,mapDispathToProps),
    withAuthRedirect)
    (Dialogs);

