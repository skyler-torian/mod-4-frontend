import React from 'react';
import SearchBar from '../components/SearchBar';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'

class HomeContainer extends React.Component {

    clickOfASong = ()=>{
        console.log('hello')



    }
    

    render() { 
        return ( 
            <div className = 'home-container'>
                <SearchBar searchHandler ={this.props.searchHandler}/>
                <Sidebar />

                <Header />
                <Recommended songsArray ={this.props.songsArray} clickSong = {this.clickOfASong}/>
                <NowPlaying songObj = {this.props.songArray[0]} />

            </div>
         );
    }
}
 
export default HomeContainer;