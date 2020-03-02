import React from 'react';
import './App.css';
import HomeContainer from './containers/Home_Container';
import Login from './containers/Login'
import Sidebar from './components/Sidebar'
import SearchResults from './components/SearchResults'
// import SignUpContainer from './containers/SignupContainer'

class App extends React.Component {

  state ={
    songsArray:[]

  }



componentDidMount(){  
    fetch('http://localhost:3000/songs')
    .then(r => r.json())
    .then(data => this.setState({
        songsArray:data
    }))


} 

 render(){

  return (
    <div>
      <div className ='App'></div>
      {/* <SignUpContainer /> */}
      <Login />
      <HomeContainer songsArray={this.state.songsArray}/>
      <Sidebar />
      <SearchResults />
    </div>
    );
  }
}

 
export default App;
