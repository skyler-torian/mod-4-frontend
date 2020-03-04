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
import LibraryContainer from "./containers/Library_Container";

import SignUpContainer from './containers/SignupContainer'

class App extends React.Component {

  state ={
    songsArray:[],
    searchedSongs:null,
    searchText: "",
    userSongs: null,
    activeSong:null
  }

  searchHandler = (event) => {
    event.preventDefault()

   
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
  fetchUserSongs =()=>{
    fetch('http://localhost:3000/saved_songs')
    .then(resp => resp.json())
    .then(songsArray => {
      this.setState({
        userSongs: songsArray
      })
    })
      


  }
  handlePlayOfSong=(event)=>{
    debugger
    this.setState({
      activeSong: event.target.parentElement.dataset.mp3 
    })

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
          
        <HomeContainer activeSong={this.state.activeSong}handlePlayOfSong={this.handlePlayOfSong}clickSongs = {this.fetchUserSongs} songState={this.state} searchHandler={this.searchHandler}/>
          </Route>
         {
           this.state.userSongs? 
          <Route path ="/library/songs"> 
            <LibraryContainer  userSongs ={this.state.userSongs}/>
          </Route>:<Redirect to= '/home'/>
         }


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
