import React from 'react';
import './App.css';

import SignUpContainer from './container/signup_container'
class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
      <div>App</div>
      <SignUpContainer />
    
      </div>
      );
  }  
}

 
export default App;
