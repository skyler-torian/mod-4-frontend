import React from 'react'

class SearchBar extends React.Component {
    test = (e)=>{
        e.preventDefault()
        console.log('test')

    }
    render() {
        
        return (
        <div>
            <form className="search-bar"onSubmit={this.props.searchHandler}>
                <input type="text" placeholder="Search..." className="search-bar" /> 
                <input type="submit" className="submit" />
            </form>
        </div>
        )
    }
}

export default SearchBar
    
    