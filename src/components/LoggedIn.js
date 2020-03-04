import React from 'react'

class LoggedIn extends React.Component {
    render() {
        return(
            <div className="current-user">Current User: {this.props.currentUser}</div>
        )
    }
}

export default LoggedIn