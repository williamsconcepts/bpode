import React from "react"
import "../styles/episode-links.scss"

const EpisodeLinks = (props) => {

    return (
        
        <div className="listen-container episode-links">
          <h4 className = "listen-title"><span role="img" aria-label="Headphones">🎧</span></h4>
          <a className = "listen listen-link" href={props.direct || "/"} target="_blank" rel="noopener noreferrer">Direct</a> 
          <a className = "listen listen-link" href={props.apple || "https://pca.st/gk7xambi"} target="_blank" rel="noopener noreferrer">Pocket Cast</a> 
          <a className = "listen listen-link" href={props.google || "https://anchor.fm/boobaeblog"} target="_blank" rel="noopener noreferrer">Anchor</a> 
          <a className = "listen listen-link" href={props.spotify || "https://www.breaker.audio/meet-boobae"} target="_blank" rel="noopener noreferrer">Breaker</a> 
          <a className = "listen listen-link" href={props.spotify || "https://radiopublic.com/boobaeblog-WJVQw2"} target="_blank" rel="noopener noreferrer">RadioPublic</a> 
          <a className = "listen listen-link" href={props.spotify || "https://open.spotify.com/show/4e2OBUBo3pc4Y41RwFakT4"} target="_blank" rel="noopener noreferrer">Spotify</a> 
        </div>
       
    )
  }

  export default EpisodeLinks