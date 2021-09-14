import React from 'react';

class ProfileStatuse extends React.Component {
    state = {
        editMode: true,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: true,
        })
        this.props.updateStatus(this.state.status);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    onStatusChsnge = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {this.state.editMode

                    ? <div>
                        <span onClick={this.activateEditMode}>
                            {this.props.status || '----'}</span>
                    </div>

                    : <div><input
                        onChange={this.onStatusChsnge}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status} /> </div>
                }
            </div>
        )
    }
}

export default ProfileStatuse;