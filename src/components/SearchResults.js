import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'


class SearchResults extends React.Component {
    render() {
        
        return(
            <div className = "search-info">
                <table>
                    {this.props.songArray.map((song)=>{
                       return <tr>
                                 <td><img src={song.album.cover_small}/></td>
                                <td>{song.artist.name}</td>
                                <td>{song.title}</td>
                                <td>{song.duration}</td>

                            </tr>



                      })}
                </table>
                <div>this is the SearchResults</div>
                < SearchBar />
                < Header />
                < Sidebar />

            </div>
        )
    }
}

export default SearchResults