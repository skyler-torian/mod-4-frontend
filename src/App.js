import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Login from './containers/Login'
import Sidebar from './components/Sidebar'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div>
    <div>App</div>
    <Login />
    <SearchBar />
    <Sidebar />
    <SearchResults />
    </div>
    );
}

export default App;
