import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Login from './containers/Login'
import Sidebar from './components/Sidebar'
import LibraryContainer from "./containers/Library_Container";
import LoggedIn from './components/LoggedIn'
import SignUpContainer from './containers/SignupContainer'

class App extends React.Component {

  state ={
    songsArray:[],
    searchedSongs:null,
    searchText: "",
    currentUser: null,
    userSongs: null,
    activeSong:null
  }

  updateCurrentUser = (event) => {
    event.preventDefault()
        fetch('http://localhost:3000/fakelogin', {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              username: event.target.firstElementChild.value
          })
      }).then(res => res.json())
      .then(data => this.setState({
        currentUser: data}))
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
    
    let user_id = this.state.currentUser.id
    fetch(`http://localhost:3000/saved_songs/${user_id}`)
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

          <Route exact path ="/signup">
            <SignUpContainer />
          </Route>



         
          <Route exact path ="/home" render={()=>{
            return !this.state.currentUser?
            <Redirect to ='/'/>:
            <HomeContainer activeSong={this.state.activeSong}handlePlayOfSong={this.handlePlayOfSong}clickSongs = {this.fetchUserSongs} songState={this.state} searchHandler={this.searchHandler} currentUser={this.state.currentUser}/>
            
          }}> 
          </Route>



          <Route exact path ="/" render={() => {
             
            return this.state.currentUser ?
            <Redirect
            to={{
              pathname: "/home",
              state: {currentuser:this.state.currentUser }
            }}
            /> : <Login updateCurrentUser={this.updateCurrentUser} currentUser={this.state.currentUser}/>
          }}>
        
          </Route>
          {
            this.state.userSongs? 
            <Route exact path ="/library/songs"> 
              <LibraryContainer  handlePlayOfSong={this.handlePlayOfSong} userSongs ={this.state.userSongs}/>
            </Route>:<Redirect to= '/home'/>
          }


          <Sidebar />
         
        
        </Switch>
      </div>
    </Router>
    );
  }
}


 
export default App;
