import React from 'react'

class Login extends React.Component {

    state = {
        username: this.props.currentUser
    }

    handleLoginSubmit = () => {
    
        fetch('http://localhost:3000/fakelogin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: this.props.currentUser
            })
        }).then(res => res.json())
        .then(data => console.log(data))
            
    }

    render() {
        return(
            <div>
                <header className= 'header'> Login</header>

                <form className ='login'onSubmit={this.props.updateCurrentUser}>
                    <input type="text" ref="username" placeholder="Enter Username" />
                    <input className="ui tiny button"type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login