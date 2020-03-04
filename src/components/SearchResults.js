import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'


class SearchResults extends React.Component {
    render() {
        
        return(
            <div>
               
                <table className = "search-info">
                    {this.props.songArray.map((song)=>{
                        
                       return <tr onClick={this.props.handlePlayOfSong} id ={song.id} data-artist={song.artist.name} data-title ={song.title} data-duration ={song.duration} data-mp3={song.preview}
                       data-album={song.album.title} data-img ={song.album.cover_small}>
                                <td><button className = "like-button" onClick={this.props.clickLike} >❤️</button></td>
                                <td><img src={song.album.cover_small}/></td>
                                <td>{song.artist.name}</td>
                                <td>{song.album.title}</td>

                                <td>{song.title}</td>
                                <td>{song.duration}</td>

                            </tr>



                      })}
                </table>
           

            </div>
        )
    }
}

export default SearchResults