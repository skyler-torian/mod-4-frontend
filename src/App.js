import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SignUp from './containers/signup_container'
function App() {
  return (
    <div>
    <div>App</div>
    <SignUp />
    <SearchBar />
    </div>
    );
}
export default App;