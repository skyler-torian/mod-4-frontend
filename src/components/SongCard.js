import React from 'react';

class SongCard extends React.Component {
   
    render() { 
        return ( 
            <div className = 'song-card'>
                <img className ='cover-art'src = {this.props.songObj.cover_art}></img>
                <div className ='artist'>{this.props.songObj.artist}</div>
                <div className ='title'>{this.props.songObj.title}</div>





            </div>


         );
    }
}
 
export default SongCard;