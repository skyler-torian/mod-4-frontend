import React from 'react';
import './App.css';
import HomeContainer from './containers/Home_Container';
import Login from './containers/Login'
import Sidebar from './components/Sidebar'
import SearchResults from './components/SearchResults'
import SignUpContainer from './containers/signup_container'

function App() {
  return (
    <div>
    <div className ='App'></div>
    <SignUpContainer />
    <Login />
    <HomeContainer />
    <Sidebar />
    <SearchResults />
    </div>
    );
  }

 
export default App;
