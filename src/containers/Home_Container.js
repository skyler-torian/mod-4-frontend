import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Recommended from '../components/Recommended'
import NowPlaying from '../components/NowPlaying'

class HomeContainer extends React.Component {
    state ={
        songsArray:[]
    


    }

    componentDidMount(){  
        fetch('http://localhost:3000/songs')
        .then(r => r.json())
        .then(data => this.setState({
            songsArray:data
        }))


    } 

    render() { 
        return ( 
            <div className = 'home-container'>
                <SearchBar />
                <Header />
                <Recommended songsArray ={this.state.songsArray}/>
                <NowPlaying />
            </div>
         );
    }
}
 
export default HomeContainer;