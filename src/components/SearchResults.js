import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'

class SearchResults extends React.Component {
    render() {
        return(
            <div>
            <div>SearchResults</div>
            < SearchBar />
            < Header />
            < Sidebar />

            </div>
        )
    }
}

export default SearchResults