import React, { Component } from 'react';
import Signup_Form from '../components/Signup_Form'


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
                <Signup_Form  submit = {this.handleSubmitForm}/>

            </div>

          );
    }
}
 
export default SignUpContainer;