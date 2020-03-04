import React from 'react';
import SongCard from './SongCard'

class Recommended extends React.Component {
   fourSongs = () =>{
    return this.props.songsArray.slice(0,4)

   }


    render() { 
        
        return (  
            <div className = 'recommended-component'> 
                {this.fourSongs().map((song) =>{
                    return <SongCard  
                    key ={song.id}
                    songObj = {song} 
                    handlePlayOfSong ={this.props.handlePlayOfSong}
                    />
                    
                })
            }
            </div>


        );
    }
}
 
export default Recommended;