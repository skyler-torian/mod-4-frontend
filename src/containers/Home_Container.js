import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'

class HomeContainer extends React.Component {

    render() { 
        return ( 
            <div className = 'home-container'>
                <SearchBar />
                <Header />
                <Recommended />
                <NowPlaying />
            </div>
         );
    }
}
 
export default HomeContainer;