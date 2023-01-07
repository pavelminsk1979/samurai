import React from "react";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEdidMode  ()  {
        this.setState({
            editMode:true
        })
    }

    deActivateEdidMode  ()  {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEdidMode.bind(this)}>
                            {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onBlur={this.deActivateEdidMode.bind(this)}
                            value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


