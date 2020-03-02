import React, { Component } from 'react';

class SignupForm extends Component {


    render() { 
        return ( 
            <div className= 'signup-form'>
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname" />
                <label for="lname">Username:</label>
                <input type="text" id="lname" name="lname" />
                <button type = 'submit' onClick = {this.props.submit}>submit</button>


            </div>



         );
    }
}
 
export default SignupForm;