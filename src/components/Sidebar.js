import React from 'react'
import {Link} from "react-router-dom";
class Sidebar extends React.Component {
    render() {
        console.log(this.props)
        return(
            <div className = 'side-bar'>
                <div>
                    <button className="button">Artists
                    </button>
                </div>
                <div>
                <Link to="/library/songs">
                    <button onClick={this.props.clickSongs} className="button">Songs
                    </button>
                </Link>
                </div>
            </div>
        )
    }
}

export default Sidebar