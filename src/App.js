import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Login from './containers/Login'
import Sidebar from './components/Sidebar'
import SearchResults from './components/SearchResults'
import SignUpContainer from './container/signup_container'

function App() {
  return (
    <div>
    <div>App</div>
    <SignUpContainer />
    <Login />
    <SearchBar />
    <Sidebar />
    <SearchResults />
    </div>
    );
  }

 
export default App;
