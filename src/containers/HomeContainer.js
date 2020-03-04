import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'
import Sidebar from '../components/Sidebar'
import SearchResults from '../components/SearchResults'

class HomeContainer extends React.Component {

    render() { 
      debugger
        return ( 
            <div className = 'home-container'>
                <SearchBar searchHandler={this.props.searchHandler}/>
                <Header />
               
                {this.props.songState.searchedSongs ?
                
                <SearchResults songArray ={this.props.songState.searchedSongs}/>:<Recommended songsArray ={this.props.songState.songsArray}/>
                
                }
                <Sidebar />
                <NowPlaying />
            </div>
         );
    }
}
 
export default HomeContainer;