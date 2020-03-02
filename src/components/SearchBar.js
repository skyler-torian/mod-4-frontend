import React from 'react'

class SearchBar extends React.Component {
    render() {
        return <input type="text" placeholder="Search..." className="search bar" onChange={this.props.searchHandler}/>
    }
}

export default SearchBar
    
    