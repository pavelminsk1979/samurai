import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string
    updateStatusMyProfile: (status: string) => void
}

export class ProfileStatus extends React.Component <ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEdidMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEdidMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusMyProfile(this.state.status)
    }
    onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status:event.currentTarget.value
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEdidMode}>
                            {this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onChangeHandler}
                            autoFocus
                            onBlur={this.deActivateEdidMode.bind(this)}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


