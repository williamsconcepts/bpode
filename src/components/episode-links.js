import React from "react"
import "../styles/episode-links.scss"

const EpisodeLinks = (props) => {

    return (
        
        <div className="listen-container episode-links">
          <h4 className = "listen-title"><span role="img" aria-label="Headphones">🎧</span></h4>
          {/* <a className = "listen listen-link" href={props.direct || "/"} target="_blank" rel="noopener noreferrer">Direct</a>  */}


          <a className = "listen listen-link" href={props.anchor || "https://anchor.fm/boobaeblog"} target="_blank" rel="noopener noreferrer">Anchor</a> 

          <a className = "listen listen-link" href={props.spotify || "https://open.spotify.com/show/4e2OBUBo3pc4Y41RwFakT4"} target="_blank" rel="noopener noreferrer">Spotify</a> 

          <a className = "listen listen-link" href={props.google || "https://pca.st/gk7xambi"} target="_blank" rel="noopener noreferrer">Pocket Cast</a> 

          <a className = "listen listen-link" href={props.google || "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZDAyZjMwMC9wb2RjYXN0L3Jzcw=="} target="_blank" rel="noopener noreferrer">Google Podcast</a> 
          
          
          <a className = "listen listen-link" href={props.breaker || "https://www.breaker.audio/meet-boobae"} target="_blank" rel="noopener noreferrer">Breaker</a> 
          
          

          
        </div>
       
    )
  }

  export default EpisodeLinks