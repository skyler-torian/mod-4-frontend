import React from 'react'

class Sidebar extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <button className="button">Artists
                    </button>
                </div>
                <div>
                    <button className="button">Songs
                    </button>
                </div>
            </div>
        )
    }
}

export default Sidebar