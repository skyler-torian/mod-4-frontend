import React, { Component } from 'react';
import SignupForm from '../components/SignupForm'


class SignUpContainer extends Component{

  state={
    name: '',
    username: ''
  }




 
    handleSubmitForm = (event) =>{
        const name = event.target.parentElement.children[1].value
        const username = event.target.parentElement.children[3].value
        
        this.setState({
            name: name,
            username: username
        })
        console.log(name,'has signed up')


    }


    render() { 
        return (
            <div>
                <SignupForm  submit = {this.handleSubmitForm}/>

            </div>

          );
    }
}
 
export default SignUpContainer;