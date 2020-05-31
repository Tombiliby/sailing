import React from "react"
import SpotifyPlayer from 'react-spotify-player';


const Playlist = () => {
  const size = {
    width: "100%",
    height: "500",
  };
  const view = 'list'; // or 'coverart'


  return (
    <>
      <h2>Playlist</h2>
      <SpotifyPlayer
        uri="spotify:playlist:5GgzOd1oVqgWgqSV0DE4DC"
        size={size}
        view={view}
      />
    </>
  )
}

export default Playlist