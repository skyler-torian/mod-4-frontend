import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Login from './containers/Login'
import Sidebar from './components/Sidebar'

import SignUpContainer from './containers/SignupContainer'

class App extends React.Component {

  state ={
    songsArray:[],
    searchedSongs:null,
    searchText: ""
  }

  searchHandler = (event) => {
    event.preventDefault()

        // this.setState({
    //   searchText:
    // })
    let searchValue = event.target.firstElementChild.value
    let convertedValue= searchValue.replace(/ /g,"%20")
              fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${convertedValue}`, {
                "method": "GET",
                "headers": {
                  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                  "x-rapidapi-key": "c38ba6a2c0msh5f61bfe076d3a6ep195b44jsn034cfbf202fc"
                }
              })
              
              .then(response => response.json())
              .then(response => {
                
                this.setState({
                searchedSongs: response.data
              })})
              
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
    <Router>
      
      <div className ='App'>
        <Switch>
          <Route path ="/signup">
            <SignUpContainer />
          </Route>

          <Route path ="/home"> 
          
            <HomeContainer songState={this.state} searchHandler={this.searchHandler}/>
          </Route>
         



          <Route path ="/" >
            <Login />
          </Route>

          <Sidebar />
         
        
        </Switch>
      </div>
    </Router>
    );
  }
}


 
export default App;
