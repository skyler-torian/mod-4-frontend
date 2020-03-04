import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'
import Sidebar from '../components/Sidebar'
import SearchResults from '../components/SearchResults'

class HomeContainer extends React.Component {

    state={
        userSongs: null
    }

    clickLike = (event)=>{
        let title = event.target.parentElement.parentElement.dataset.title
        let artist = event.target.parentElement.parentElement.dataset.artist
        let album = event.target.parentElement.parentElement.dataset.album
        let link = event.target.parentElement.parentElement.dataset.link
        let img = event.target.parentElement.parentElement.dataset.img
        let duration = event.target.parentElement.parentElement.dataset.duration

        const newObject={title:title, artist: artist, duration:duration,album:album, cover_art:img, link:link}
        debugger
      fetch('http://localhost:3000/songs',{

        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:
            JSON.stringify(newObject)

      })
      .then(resp => resp.json())
      .then(data => console.log(data))

       

    }
    
      



    render() { 
        
        return ( 
            <div className = 'home-container'>
                <SearchBar searchHandler={this.props.searchHandler}/>
                <Header />
               
                {this.props.songState.searchedSongs?
                
                <SearchResults handlePlayOfSong={this.props.handlePlayOfSong} clickLike ={this.clickLike}songArray ={this.props.songState.searchedSongs}/>:<Recommended handlePlayOfSong={this.props.handlePlayOfSong}songsArray ={this.props.songState.songsArray} />
                
                }
                <Sidebar clickSongs = {this.props.clickSongs}/>
               
                <NowPlaying songsrc = {this.props.activeSong}/> 
                
            
            </div>
         );
    }
}
 
export default HomeContainer;