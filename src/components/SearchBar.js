import React from 'react'

class SearchBar extends React.Component {
    render() {
        
        return (<div>
         <input type="text" placeholder="Search..." className="search bar" onChange={this.props.searchHandler}/> 
         <input type="submit" className="submit" />
            </div>
        )
    }
}

export default SearchBar
    
    