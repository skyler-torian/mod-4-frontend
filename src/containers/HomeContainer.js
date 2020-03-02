import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'
import Sidebar from '../components/Sidebar'

class HomeContainer extends React.Component {

    render() { 
        
        return ( 
            <div className = 'home-container'>
                <SearchBar searchHandler={this.props.searchHandler}/>
                <Header />
                <Recommended songsArray ={this.props.songsArray}/>
                <Sidebar />
                <NowPlaying />
            </div>
         );
    }
}
 
export default HomeContainer;