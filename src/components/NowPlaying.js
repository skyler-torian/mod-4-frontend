import React from "react";
import "./Player.css";
class NowPlaying extends React.Component{

    render(){
        
        return(

        <div>
            { this.props.songsrc?
                
                <audio controls
                className ='player'
                ref="audio_tag"
                id="audio-player"
                src= {this.props.songsrc}
                autoPlay
                loop
                muted={!this.props.paused}
                />: 
                <audio controls
                className ='player'
                ref="audio_tag"
                id="audio-player"
                autoPlay
                loop
                muted={!this.props.paused}/>

                
            }
            </div>



            
        )





    }



}

export default NowPlaying;