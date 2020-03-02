import React from 'react'

class Login extends React.Component {
    render() {
        return(
            <div>
            <input type="text" ref="username" placeholder="Enter Username" />
            {/* <input type="text" ref="password" placeholder="Enter Password" /> */}
            <input class="button" type="submit" />
            </div>
        )
    }
}

export default Login