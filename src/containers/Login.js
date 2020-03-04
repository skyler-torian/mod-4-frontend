import React from 'react'

class Login extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.updateCurrentUser}>
            <input type="text" ref="username" placeholder="Enter Username" />
            {/* <input type="text" ref="password" placeholder="Enter Password" /> */}
            <input class="button" type="submit"/>
            </form>
        )
    }
}

export default Login