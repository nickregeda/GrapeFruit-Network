import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = (e) => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        if (this.props.myId !== this.props.userId) {
            return <div>{this.props.status}</div>
        }
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                    :
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{!this.props.status ? 'no status' : this.props.status}</span>
                    </div>
                }
            </div>
        );
    }
}

export default Status;