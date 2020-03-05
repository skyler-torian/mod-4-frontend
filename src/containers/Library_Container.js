import React from 'react';
import SideBar from '../components/Sidebar';
import NowPlaying from '../components/NowPlaying'
import LoggedIn from '../components/LoggedIn'
import Sidebar from '../components/Sidebar';
class LibraryContainer extends React.Component {
    render() { 
        
        return ( 
            <div>
                <Sidebar />
                <header className ='header'>Library</header>
                <LoggedIn currentUser={this.props.currentUser}/>
                <table className ='library-table'>
                    {this.props.userSongs.map((song)=>{
                        
                        return <tr onClick={this.props.handlePlayOfSong}id ={song.id} data-artist={song.artist.name} data-title ={song.title} data-duration ={song.duration} data-link={song.link}
                        data-album={song.album.title} data-img ={song.album.cover_small}>
                                    <td><button className = "like-button" onClick={this.props.clickLike} >❤️</button></td>
                                    <td><img src={song.cover_art}/></td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>

                                    <td>{song.title}</td>
                                    <td>{song.duration}</td>

                                </tr>

                    })}
                </table> 
                <NowPlaying />
            </div>
            );
    }
}
 


 
export default LibraryContainer;